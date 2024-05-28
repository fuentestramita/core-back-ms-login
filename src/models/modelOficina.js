var sql = require("mssql");

const OficinaSchema = {
  id: sql.TYPES.Numeric,
  descripcion: sql.TYPES.VarChar,
  selected: sql.TYPES.Bit,
};

module.exports = OficinaSchema;
