var sql = require("mssql");

const OficinaSchema = {
  id: sql.TYPES.Numeric,
  dscripcion: sql.TYPES.VarChar,
  selected: sql.TYPES.Bit,
};

module.exports = OficinaSchema;
