const Service = require("../services/MenuService.js");
const generales = require("../controllers/generalesController.js");

const jwt = require("jsonwebtoken");
const doMenu = async (req, res) => {
  console.log("running menu controller");
  const cookies = req.cookies;
  var accessT = cookies.accessJWT;

  if (accessT == null) {
    accessT = generales.extractToken(req);
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

module.exports = { doMenu };
