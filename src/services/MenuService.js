const DB = require("../database/db");

const doMenu = async (UsuarioID) => {
  try {
    let dbResponse = await DB.getMenu(UsuarioID);
    let MenuList;
    if (dbResponse.length == 0) {
      return null;
    }
    MenuList = dbResponse;

    return MenuList;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { doMenu };
