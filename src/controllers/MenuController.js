const Service = require("../services/MenuService.js");
const jwt = require("jsonwebtoken");
const doMenu = async (req, res) => {
  console.log("running menu controller");
  const cookies = req.cookies;
  var accessT = null; //cookies.accessJWT;

  if (accessT == null) {
    accessT = extractToken(req);
  }

  if (!cookies) return res.status(400).json({ message: `No existe la cookie.` });
  if (!accessT) return res.status(400).json({ message: `Acceso no autorizado.` });

  const UsuarioID = jwt.decode(accessT).data.idUsuario;
  let menuValue = await Service.doMenu(UsuarioID);
  //Check if user actually exists
  if (menuValue == null) {
    res.status(401).json({
      message: `No existen menus.`,
    });

    return res;
  }

  res.status(200);
  res.json(menuValue);
  return res;
};

function extractToken(req) {
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    return req.headers.authorization.split(" ")[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

module.exports = { doMenu };
