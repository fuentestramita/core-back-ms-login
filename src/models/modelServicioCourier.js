var sql = require("mssql");

const ServicioCourierSchema = {
  id: (sql.TYPES.Numeric, null),
  descripcion: (sql.TYPES.VarChar, ""),
  selected: (sql.TYPES.Bit, 0),
};

module.exports = ServicioCourierSchema;
