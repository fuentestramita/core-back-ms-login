var sql = require("mssql");

const Adquirentechema = {
  adquirenteId: (sql.TYPES.Numeric, ""),
  rut: (sql.TYPES.VarChar, ""),
  nombreRazonSocial: (sql.TYPES.VarChar, ""),
  direccion: (sql.TYPES.Int, null),
  numero: (sql.TYPES.Int, null),
  compplemento: (sql.TYPES.Int, null),
};

module.exports = Adquirentechema;
