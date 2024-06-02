var sql = require("mssql");

const DocumentosRecibidosSchema = [
  {
    id: (sql.TYPES.Numeric, null),
    primeraInscripcionId: (sql.TYPES.Numeric, null),
    tipoDocumentoId: (sql.TYPES.Numeric, null),
    naturalezaAdquisicion: (sql.TYPES.VarChar, null),
    nroDocumentoCausa: (sql.TYPES.VarChar, null),
    valorNeto: (sql.TYPES.Numeric, null),
    valorIVAFactura: (sql.TYPES.Numeric, null),
    valorTotalFactura: (sql.TYPES.Numeric, null),
    lugarDocumento: (sql.TYPES.VarChar, null),
    fechaDocumento: (sql.TYPES.DateTime, null),
    nombreAutorizanteEmisor: (sql.TYPES.VarChar, null),
    acreedorBeneficiarioDemandante: (sql.TYPES.VarChar, null),
    pdf: (sql.TYPES.VarChar, null),
    rutDocumento: (sql.TYPES.VarChar, null),
    tipoDocumento: (sql.TYPES.VarChar, null),
  },
];

module.exports = DocumentosRecibidosSchema;
