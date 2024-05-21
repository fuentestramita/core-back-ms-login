var sql = require("mssql");

const ObservacionSchema = {
  id: sql.TYPES.Numeric,
  dscripcion: sql.TYPES.VarChar,
  selected: sql.TYPES.Bit,
};

module.exports = ObservacionSchema;
