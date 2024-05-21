const DB = require("./db.js");
var sql = require("mssql");

const SEL_Empresas = async () => {
  try {
    let pool = await DB.getConnection();
    let result1 = await pool.request().query(`exec SEL_EMPRESAS `);

    const result = { datos: result1.recordset };
    return result;
  } catch (err) {
    return { error: err };
  }
};

module.exports = { SEL_Empresas };
