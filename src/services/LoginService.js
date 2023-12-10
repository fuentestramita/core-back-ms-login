const db = require("../database/db.js");

const loginUsuario = async (UsuarioID, code) => {
  try {
    let validated = await db.dbGetCodigo(UsuarioID, code);
    if (validated.length == 0) {
      return null;
    }
    let respuesta = {
      nombreUsuario: validated[0].NombreUsuario,
      perfilID: validated[0].PerfilID,
      status: "VALIDO",
      statuscode: 200,
    };
    console.log("service");
    console.log(respuesta);
    return respuesta;
  } catch (error) {}
};

module.exports = { loginUsuario };
