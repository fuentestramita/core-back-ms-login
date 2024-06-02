var sql = require("mssql");

const PersonaEmpresaSchema = {
  personaEmpresaID: (sql.TYPES.Numeric, null),
  rut: (sql.TYPES.VarChar, ""),
  nombreRazonSocial: (sql.TYPES.VarChar, ""),
  apPaterno: (sql.TYPES.VarChar, ""),
  apMaterno: (sql.TYPES.VarChar, ""),
  eMail: (sql.TYPES.VarChar, ""),
  fonoContacto1: (sql.TYPES.VarChar, ""),
  fonoContacto2: (sql.TYPES.VarChar, ""),
  direccion: (sql.TYPES.VarChar, ""),
  nroDireccion: (sql.TYPES.VarChar, ""),
  complementoDireccion: (sql.TYPES.VarChar, ""),
  comunaID: (sql.TYPES.Numeric, ""),
};

module.exports = PersonaEmpresaSchema;
