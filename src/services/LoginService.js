const db = require("../database/db.js");

const loginUsuario = async (UsuarioID, code) => {
  try {
    let validated = await db.dbGetCodigo(UsuarioID, code);
    if (validated.length == 0) {
      console.dir("service:" + validated);
      return null;
    }

    let respuesta = {
      nombreUsuario: validated[0].NombreUsuario,
      perfilID: validated[0].PerfilID,
      usuarioID: validated[0].UsuarioID,
      rutUsuario: validated[0].RUTUsuario,
      email: validated[0].EMailUsuario,
      status: "VALIDO",
      statusCode: 200,
    };
    return respuesta;
  } catch (error) {}
};

module.exports = { loginUsuario };
