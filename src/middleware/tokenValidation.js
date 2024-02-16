const jwt = require("jsonwebtoken");
const db = require("../database/db");
require("dotenv").config();

const validateToken = (req, res, next) => {
  const authHeader = req.headers;
  if (!authHeader) return res.status(401).json("Unauthorize user"); //Si no hay header, return no autorizado
  const cookies = req.cookies;
  const accessT = cookies.accessJWT;
  const refreshT = cookies.refreshJWT;
  if (!accessT) return res.status(401).json("Unauthorized user"); //Si hay header pero no hay token, return no autorizado
  jwt.verify(accessT, process.env.ACCESS_KEY, (err, decoded) => {
    if (err) {
      exp = err.expiredAt;
      console.log(Date.now() >= exp * 1000); //false = expired || true = valid
      if (!(Date.now() >= exp * 1000)) {
        console.log("validando");
        jwt.verify(refreshT, process.env.REFRESH_KEY, (err, decoded) => {
          if (err) {
            console.log("Refresh token invalido. Iniciar sesion denuevo");
            return res
              .status(401)
              .json({ message: "Inicie sesión nuevamente." }); //res.status.json manda res con status y mensaje
          }
          if (decoded) {
            refreshAccessToken(refreshT, res, next);
          }
        });
        //check if refresh token is valid
        //if valid,
        //run refresh to create new token
        //if invalid, return unauthorized, re-login
      } else {
        return res.sendStatus(403); //Forbidden access: token invalido  //res.sendStatus manda directamente el status sin mensaje
      }
    }
    if (decoded) {
      console.dir("Token Validated");
      next();
    }
  });
};
const refreshAccessToken = async (refreshToken, res, next) => {
  let refreshRut;
  jwt.verify(refreshToken, process.env.REFRESH_KEY, async (err, decoded) => {
    refreshRut = decoded.rutUsuario;
    foundUser = await db.dbGetUser(decoded.idUsuario);
    if (foundUser != null && typeof foundUser != "undefined") {
      dbRut = foundUser[0].RUTUsuario;
    } else {
      return res.sendStatus(401);
    }

    if (refreshRut == dbRut) {
      const accessToken = jwt.sign(
        {
          data: {
            idUsuario: foundUser.usuarioID,
            idPerfil: foundUser.perfilID,
            EMailUsuario: foundUser.email,
            rutUsuario: foundUser.rutUsuario,
          },
        },
        process.env.ACCESS_KEY,
        { expiresIn: "1d" } // token expiration
      );
      console.log("generate cookie");
      res.cookie("accessJWT", accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // cookie expiration
      });
      console.log("generated");
      next();
    } else {
      return res.sendStatus(403);
    }
  });
  //validar rut de ambos token con la vdd
  //si el rut es valido, generar nuevo access token y retornar
  //si el rut es invalido, retornar status 403
};
module.exports = validateToken;
