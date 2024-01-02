const Service = require("../services/ValidateService");
const { validateRut } = require("@fdograph/rut-utilities");
const jwt = require("jsonwebtoken");

const doValidate = async (req, res) => {
  try {
    console.log("llegamos al controller");
    const { inputRut, inputPass } = req.body;
    if (!inputRut || !inputPass) {
      return res.status(400).json({ message: "Rut y contraseña requeridos." });
    }
    if (!validateRut(inputRut)) {
      return res.status(400).json({ message: "El Rut no es valido." });
    }

    let loginValue = await Service.validarUsuario(inputRut, inputPass, res);
    //Check if user actually exists
    //validation

    if (loginValue == null) {
      res.status(401).json({
        message: `No existen usuarios registrados con el rut ${inputRut}`,
      });

      return res;
    } else if (loginValue.error != null && loginValue.error != "") {
      res.status(500).json({
        error: `${loginValue.error}`,
      });

      return res;
    } else if (loginValue.length > 0) {
      loginValue = loginValue[0];
    }

    console.log("llegamos a generar token");
    //Get accessToken from jwt
    let accessToken = generateToken(loginValue, res);
    res.status(200);
    res.json({
      message: `Ingreso autorizado: ${loginValue.nombreUsuario}`,
      usuarioID: `${loginValue.usuarioID}`,
      accessCode: loginValue.codigo,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

const generateToken = (foundUser, res) => {
  const access_key = process.env.ACCESS_KEY;
  const refresh_key = process.env.REFRESH_KEY;

  if (foundUser != null && typeof foundUser != "undefined") {
    //Handle JWT (UsuarioID, RUTUsuario)
    const accessToken = jwt.sign(
      {
        data: {
          idUsuario: foundUser.NombreUsuario,
          EMailUsuario: foundUser.EMailUsuario,
        },
      },
      access_key,
      { expiresIn: "10s" }
    );
    const refreshToken = jwt.sign(
      { idUsuario: foundUser.Nombre, rutUsuario: foundUser.Rut },
      refresh_key,
      { expiresIn: "7d" }
    );
    //Save refresh token to database for current user
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    return accessToken;
  }
};

module.exports = { doValidate };
