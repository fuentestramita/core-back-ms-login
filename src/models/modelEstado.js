var sql = require("mssql");

const EstadoSchema = {
  id: (sql.TYPES.Numeric, null),
  descripcion: (sql.TYPES.VarChar, 0),
  selected: (sql.TYPES.Bit, 0),
};

module.exports = EstadoSchema;
