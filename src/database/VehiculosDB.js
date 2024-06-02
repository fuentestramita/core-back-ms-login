const DB = require("./db.js");
var sql = require("mssql");

const SEL_Vehiculos = async (id) => {
  try {
    let pool = await DB.getConnection();
    let result1 = await pool.request().query(`exec SEL_Vehiculos ${id}`);

    const result = { datos: result1.recordset };
    return result;
  } catch (err) {
    return { error: err };
  }
};

module.exports = { SEL_Vehiculos };
