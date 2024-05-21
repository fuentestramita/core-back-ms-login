var sql = require("mssql");

const RegoionSchema = {
  id: sql.TYPES.Numeric,
  dscripcion: sql.TYPES.VarChar,
  selected: sql.TYPES.Bit,
};

module.exports = RegoionSchema;
