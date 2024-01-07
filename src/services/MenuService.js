const DB = require("../database/db");

const doMenu = async (UsuarioID, PerfilID) => {
  try {
    console.log("running service");
    let dbResponse = await DB.getMenu(UsuarioID, PerfilID);
    let MenuList;
    if (dbResponse.length == 0) {
      return null;
    }
    console.log("BDD called");
    MenuList = dbResponse;
    // if (dbResponse.length > 0) {
    //   MenuList = dbResponse[0];
    // } else {
    //   MenuList = dbResponse;
    // }
    console.dir(MenuList);
    return MenuList;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { doMenu };
