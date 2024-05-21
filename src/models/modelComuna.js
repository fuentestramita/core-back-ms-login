var sql = require("mssql");
const ciudades = require("../models/modelCiudad");

const ComunaSchema = {
  id: sql.TYPES.Numeric,
  dscripcion: sql.TYPES.VarChar,
  selected: sql.TYPES.Bit,
  ciudad: ciudades,
};

module.exports = ComunaSchema;
