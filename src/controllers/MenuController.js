const Service = require("../services/MenuService.js");

const doMenu = async (req, res) => {
  console.log("running menu controller");
  const { UsuarioID, PerfilID } = req.body;
  let menuValue = await Service.doMenu(UsuarioID, PerfilID);
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
