const DB = require("./db.js");
var sql = require("mssql");

const SEL_DocumentosRecibidos = async (PrimeraInscripcionID) => {
  try {
    let pool = await DB.getConnection();
    let resultSet = await pool.request().query(`exec SEL_DocumentosRecibidos ${PrimeraInscripcionID}`);
    const result = { datos: resultSet.recordset };
    return result;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

module.exports = { SEL_DocumentosRecibidos };
