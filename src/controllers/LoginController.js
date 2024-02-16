const { access } = require("fs");
const Service = require("../services/LoginService");
const jwt = require("jsonwebtoken");

async function doLogin(req, res) {
  try {
    const { usuarioID, codigo } = req.body;
    console.log(`ID: ${usuarioID} | codigo ${codigo}`);
    if (codigo == null || codigo < 100000000000 || codigo > 999999999999) {
      return res
        .status(400)
        .json({ message: "El código ingresado no es valido." });
    }
    if (usuarioID == 0 || usuarioID == null) {
      return res
        .status(400)
        .json({ message: "El ID de Usuario no es valido." });
    }
    const respuesta = await Service.loginUsuario(usuarioID, codigo);
    if (respuesta == null) {
      res.status(400);
      res.json({ message: "El Codigo ingresado es incorrecto" });
      return res;
    }

    console.log("llegamos a generar token");
    //Get accessToken from jwt
    let accessToken = generateToken(respuesta, res);

    //Send response
    res.status(respuesta.statusCode);
    res.json({
      code: `${respuesta.statusCode}`,
      status: `${respuesta.status}`,
      nombre: `${respuesta.nombreUsuario}`,
      email: `${respuesta.email}`,
      rut: `${respuesta.rutUsuario}`,
      token: accessToken,
    });
    res.end();
    return res;
  } catch (error) {
    console.log(error);
  }
}

const generateToken = (foundUser, res) => {
  const access_key = process.env.ACCESS_KEY;
  const refresh_key = process.env.REFRESH_KEY;

  if (foundUser != null && typeof foundUser != "undefined") {
    //Handle JWT (UsuarioID, RUTUsuario)
    const accessToken = jwt.sign(
      {
        data: {
          idUsuario: foundUser.usuarioID,
          idPerfil: foundUser.perfilID,
          EMailUsuario: foundUser.email,
          rutUsuario: foundUser.rutUsuario,
        },
      },
      access_key,
      { expiresIn: "1d" } // token expiration
    );
    res.cookie("accessJWT", accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // cookie expiration
    });
    const refreshToken = jwt.sign(
      { idUsuario: foundUser.usuarioID, rutUsuario: foundUser.rutUsuario },
      refresh_key,
      { expiresIn: "7d" }
    );
    //Save refresh token to database for current user
    res.cookie("refreshJWT", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return accessToken;
  }
};

module.exports = { doLogin };
