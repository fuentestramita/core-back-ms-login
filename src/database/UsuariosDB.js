const DB = require("./db.js");
var sql = require("mssql");

const SEL_Token = async (UsuarioID) => {
  try {
    let pool = await getConnection();
    let result1 = await pool.request().query(`exec SEL_Token '${UsuarioID}'`);
    if (result1.recordset.length == 0) {
      return {
        error: "No se encontraron resultados.",
      };
    } else {
      return result1.recordset;
    }
  } catch (err) {
    return { error: err };
  }
};

const INS_Token = async (RutUsuario, Token) => {
  try {
    console.log(`exec INS_Token '${RutUsuario}','${Token}'`);
    let pool = await DB.getConnection();
    let result1 = await pool.request().query(`exec INS_Token '${RutUsuario}','${Token}'`);

    return result1.recordset;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

module.exports = { SEL_Token, INS_Token };
