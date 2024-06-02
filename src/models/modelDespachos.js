var sql = require("mssql");

const DespachosSchema = [
  {
    despachoId: (sql.TYPES.Numeric, null),
    drimeraInscripcionId: (sql.TYPES.Numeric, null),
    origen: (sql.TYPES.VarChar, null),
    solicitaDespacho: (sql.TYPES.Bit, null),
    imprimirParaEntrega: (sql.TYPES.Bit, null),
    codigoDespacho: (sql.TYPES.VarChar, null),
    entregaEfectuada: (sql.TYPES.Bit, null),
    pdfEntrega: (sql.TYPES.VarChar, null),
    fechaRecepion: (sql.TYPES.Date, null),
    fechaEntrega: (sql.TYPES.Date, null),
    observacion: (sql.TYPES.VarChar, null),
    fechaRecepcionCourier: (sql.TYPES.Date, null),
    fechaEntregaCourier: (sql.TYPES.Date, null),
    codigoDespachoCourier: (sql.TYPES.VarChar, null),
    servicioCourierId: (sql.TYPES.Numeric, null),
    servicioCourier: (sql.TYPES.VarChar, null),
  },
];

module.exports = DespachosSchema;
