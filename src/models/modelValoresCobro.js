var sql = require("mssql");

const ValoreCobroSchema = {
  id: sql.TYPES.Numeric,
  dscripcion: sql.TYPES.VarChar,
  selected: sql.TYPES.Bit,
  TipoCobro: sql.TYPES.Numeric,
};

module.exports = ValoreCobroSchema;
