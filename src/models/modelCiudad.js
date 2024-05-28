var sql = require("mssql");
const regiones = require("../models/modelRegion");

const CiudadSchema = {
  id: (sql.TYPES.Numeric, null),
  descripcion: (sql.TYPES.VarChar, ""),
  selected: (sql.TYPES.Bit, 0),
  Region: regiones,
};

module.exports = CiudadSchema;
