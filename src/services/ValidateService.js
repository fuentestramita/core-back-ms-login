const db = require("../database/db.js");

const validarUsuario = async (inputRut, inputPass) => {
  try {
    //add if() to find the user, if found, save the rut and validate password
    let foundUser = await db.dbLogin(inputRut, inputPass);
    //return Values (UsuarioID, NombreUsuario, EMailUsuario, AccessToken)
    if (foundUser.error != null && foundUser.error != "") {
      return foundUser;
    }
    if (foundUser == null || foundUser.length == 0) {
      return null;
    }
    let user = foundUser[0];
    let code = require("crypto").randomInt(10 ** 11, 10 ** 12 - 1);
    console.log(code);
    await db.dbSetCodigo(user.UsuarioID, code);
    //send email to foundUser.EmailUsuario with code
    let respuesta = {
      status: "VALIDO",
      nombreUsuario: `${user.NombreUsuario}`,
      rutUsuario: `${user.rut}`,
      usuarioID: `${user.UsuarioID}`,
      perfilID: `${user.PerfilID}`,
      usuarioEmail: `${user.EMailUsuario}`,
      statuscode: 200,
      codigo: code,
    };
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { validarUsuario };
