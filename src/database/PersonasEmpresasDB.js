const DB = require("./db.js");
var sql = require("mssql");

const SEL_PersonasEmpresas = async (id) => {
  try {
    let pool = await DB.getConnection();
    let result1 = await pool.request().query(`exec SEL_PersonasEmpresas ${id}`);

    const result = { datos: result1.recordset };
    return result;
  } catch (err) {
    return { error: err };
  }
};

module.exports = { SEL_PersonasEmpresas };
