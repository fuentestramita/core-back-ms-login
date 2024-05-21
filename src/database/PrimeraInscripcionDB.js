const DB = require("./db.js");
var sql = require("mssql");

const SEL_PrimeraInscripcion = async (PPU, NUMFactura, RUTFactura) => {
  try {
    let pool = await DB.getConnection();
    let result1 = await pool
      .request()
      .query(
        `exec SEL_PrimeraInscripcion '${PPU}', '${NUMFactura}', '${RUTFactura}'`
      );

    const result = { datos: result1.recordset };
    return result;
  } catch (err) {
    return { error: err };
  }
};

const SEL_ALL = async () => {
  try {
    let pool = await DB.getConnection();
    let result1 = await pool.request().query("exec SEL_ALL");

    const result = { datos: result1.recordsets };
    return result;
  } catch (err) {
    return { error: err };
  }
};

module.exports = { SEL_PrimeraInscripcion, SEL_ALL };
