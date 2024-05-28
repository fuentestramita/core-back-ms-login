var sql = require("mssql");

const ValoreCobroSchema = {
  id: sql.TYPES.Numeric,
  descripcion: sql.TYPES.VarChar,
  selected: sql.TYPES.Bit,
  tipoCobro: sql.TYPES.Numeric,
};

module.exports = ValoreCobroSchema;
