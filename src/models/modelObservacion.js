var sql = require("mssql");

const ObservacionSchema = {
  id: sql.TYPES.Numeric,
  descripcion: sql.TYPES.VarChar,
  selected: sql.TYPES.Bit,
};

module.exports = ObservacionSchema;
