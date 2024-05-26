const jwt = require("jsonwebtoken");
const db = require("../database/db");
const generales = require("../controllers/generalesController.js");
require("dotenv").config();

/**
 * SI YO LE PEGO AL ENDPOINT
 * EXPIRADO RETORNO EL 401
 *
 * SI YO LE PEGO AL ENDPOINT
 * TOKEN VALIDO RETORNO 200
 *
 *
 * /get-menu
 *
 * /refresh-token
 *
 */

const validateToken = (req, res, next) => {
  const authHeader = req.headers;
  if (!authHeader) return res.status(401).json("Unauthorize user"); //Si no hay header, return no autorizado

  const { accessT, refreshT } = generales.extractToken(req);
  if (!accessT) {
    // jwt.verify(refreshT, process.env.REFRESH_KEY, (err, decoded) => {
    //   if (err) {
    //     console.log("Refresh token invalido. Iniciar sesion denuevo");
    //     return res.status(401).json({ message: "Inicie sesión nuevamente." }); //res.status.json manda res con status y mensaje
    //   }
    //   if (decoded) {
    //     refreshAccessToken(refreshT, res, next);
    //   }
    // });
    return res.status(401).json({ message: "Inicie sesión nuevamente." }); //Si no hay header, return no autorizado
  }

  jwt.verify(accessT, process.env.ACCESS_KEY, (err, decoded) => {
    if (err) {
      console.log(decoded);
      return res.status(401).json({ message: "Inicie sesión nuevamente.2" }); //Si no hay header, return no autorizado
      // exp = err.expiredAt;
      // console.log(Date.now() >= exp * 1000); //false = expired || true = valid
      // if (!(Date.now() >= exp * 1000)) {
      //   console.log("validando");
      //   jwt.decode(refreshT);

      //   //check if refresh token is valid
      //   //if valid,
      //   //run refresh to create new token
      //   //if invalid, return unauthorized, re-login
      // } else {
      //   return res.sendStatus(403); //Forbidden access: token invalido  //res.sendStatus manda directamente el status sin mensaje
      // }
    }
    if (decoded) {
      console.dir("Token Validated");
      next();
    }
  });
};

const refreshAccessToken2 = (req, res, next) => {
  // if ((validateToken = (req, res, next))) {
  //   exp = err.expiredAt;
  //   console.log(Date.now() >= exp * 1000); //false = expired || true = valid
  //   if (!(Date.now() >= exp * 1000)) {
  //     console.log("validando");
  //     jwt.decode(refreshT);
  //     return res.status(200).json({ message: "Token Actualizado" });
  //   }
  // } else return res.status(401).json({ message: "Inicie sesión nuevamente.2" }); //Si no hay header, return no autorizado
};

module.exports = validateToken;
