const Service = require("../services/ValidateService");

const { validateRut } = require("@fdograph/rut-utilities");
const jwt = require("jsonwebtoken");

const doValidate = async (req, res) => {
  try {
    const { inputRut, inputPass } = req.body;
    if (!inputRut || !inputPass) {
      return res.status(400).json({ message: "Rut y contraseña requeridos." });
    }
    if (!validateRut(inputRut)) {
      return res
        .status(400)
        .json({ message: "El Rut ingresado no es válido." });
    }

    let respuesta = await Service.validarUsuario(inputRut, inputPass, res);
    //Check if user actually exists
    if (respuesta == null) {
      res.status(401).json({
        message: `No existen usuarios registrados con el rut ${inputRut}`,
      });
      return res;
    } else if (respuesta.length > 0) {
      respuesta = respuesta[0];
    }
    //Get accessToken from jwt
    let accessToken = generateToken(respuesta, res);
    console.log("access token:" + accessToken);
    console.dir(jwt.verify(accessToken, process.env.ACCESS_KEY));
    //Send response
    res.status(respuesta.statuscode);
    res.json({
      status: `${respuesta.status}`,
      nombre: `${respuesta.nombreUsuario}`,
      accessCode: respuesta.codigo, //temporal
    });
    res.end();
    return res;
  } catch (error) {
    console.log(error);
  }
};

const generateToken = (foundUser, res) => {
  const access_key = process.env.ACCESS_KEY;
  const refresh_key = process.env.ACCESS_KEY;

  if (foundUser != null && typeof foundUser != "undefined") {
    //Handle JWT (UsuarioID, RUTUsuario)
    const accessToken = jwt.sign(
      {
        data: {
          idUsuario: foundUser.nombreUsuario,
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
