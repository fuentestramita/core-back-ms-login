var sql = require("mssql");
const comunas = require("../models/modelComuna");

const DireccionSchema = {
  direccion: (sql.TYPES.VarChar, ""),
  numero: (sql.TYPES.VarChar, ""),
  complemento: (sql.TYPES.VarChar, ""),
  comuna: comunas,
};

module.exports = DireccionSchema;
