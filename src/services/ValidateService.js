const { log } = require("console");
const db = require("../database/db.js");

const validarUsuario = async (inputRut, inputPass) => {
  try {
    //add if() to find the user, if found, save the rut and validate password

    let foundUser = await db.dbLogin(inputRut, inputPass);
    //return Values (UsuarioID, NombreUsuario, EMailUsuario, AccessToken)
    if (foundUser == null) {
      return null;
    }

    let user = foundUser[0];
    let code = require("crypto").randomInt(100000, 999999);
    //await db.dbSetCodigo(user.UsuarioID, code);
    //send email to foundUser.EmailUsuario with code
    let respuesta = {
      status: "VALIDO",
      nombreUsuario: `${user.NombreUsuario}`,
      statuscode: 200,
      codigo: code,
    };
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { validarUsuario };
