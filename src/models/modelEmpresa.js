var sql = require("mssql");

const EmpresaSchema = {
  id: (sql.TYPES.Numeric, null),
  rutEmpresa: (sql.TYPES.VarChar, 0),
  razonSocialEmpresa: (sql.TYPES.VarChar, 0),
  backGroundColor: (sql.TYPES.VarChar, 0),
  foreColor: (sql.TYPES.VarChar, 0),
  logoURL: (sql.TYPES.VarChar, 0),
};

module.exports = EmpresaSchema;
