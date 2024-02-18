const Service = require("../services/MenuService.js");

const doMenu = async (req, res) => {
  console.log("running menu controller");
  const { UsuarioID } = req.body;
  if (!UsuarioID)
    return res.status(400).json({ message: `Es necesario el ID de usuario.` });
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
