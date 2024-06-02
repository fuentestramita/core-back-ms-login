const Service = require("../services/MenuService.js");
const generales = require("../controllers/generalesController.js");
const Menu = require("../models/modelMenu.js");
const jwt = require("jsonwebtoken");

const doMenu = async (req, res) => {
  try {
    const cookies = req.cookies;

    const { accessT } = generales.extractToken(req);
    if (!cookies) return res.status(400).json({ message: `No existe la cookie.` });
    if (!accessT) return res.status(400).json({ message: `Acceso no autorizado.` });

    const UsuarioID = jwt.decode(accessT).data.idUsuario;
    let rsMenu = await Service.doMenu(UsuarioID); // Llamado base de datos
    if (rsMenu == null) {
      res.status(401).json({
        message: `No existen menus.`,
      });

      return res;
    }

    // crea un arreglo llamado findSeMenu
    // recibe menus y el id padre
    // recorre todo el array y solo pushea al submenu cuando la condicion es true
    const findSubMenu = (menus, idPadre) => menus.filter((menu) => menu.PadreID === idPadre);

    // map recorre el array y pushea el return a la constante que creas en este caso el menu
    const menu = rsMenu.map((menu) => {
      return {
        id: menu.id,
        name: menu.name,
        route: menu.route,
        submenu: findSubMenu(rsMenu, menu.id),
      };
    });
    res.status(200);
    res.json(menu);
    return res;
  } catch (e) {
    return e;
  }
};

module.exports = { doMenu };

const findSubMenu = (menus, idPadre) => menus.filter(menu.PadreID === idPadre);
