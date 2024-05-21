const DB = require("./db.js");
var sql = require("mssql");

const SEL_Despachos = async (PrimeraInscripcionID) => {
  try {
    let pool = await DB.getConnection();
    let resultSet = await pool.request().query(`exec SEL_Despachos ${PrimeraInscripcionID}`);

    const result = { datos: resultSet.recordset };
    return result;
  } catch (err) {
    return { error: err };
  }
};

module.exports = { SEL_Despachos };
