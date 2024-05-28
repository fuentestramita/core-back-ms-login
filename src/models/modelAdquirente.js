var sql = require("mssql");

const Adquirentechema = {
  adquirenteID: (sql.TYPES.Numeric, ""),
  rut: (sql.TYPES.VarChar, ""),
  nombreRazonSocial: (sql.TYPES.VarChar, ""),
  direccion: (sql.TYPES.Int, null),
  numero: (sql.TYPES.Int, null),
  compplemento: (sql.TYPES.Int, null),
  nroMotor: (sql.TYPES.VarChar, ""),
  nroChasis: (sql.TYPES.VarChar, ""),
  nroSerie: (sql.TYPES.VarChar, ""),
  nroVin: (sql.TYPES.VarChar, ""),
  carga: (sql.TYPES.Int, null),
  pesoBruto: (sql.TYPES.Int, ""),
  otraCarroceria: (sql.TYPES.VarChar, ""),
  nroEjes: (sql.TYPES.Int, null),
  codigoCIT: (sql.TYPES.VarChar, ""),
  nroEjesDisponibles: (sql.TYPES.Int, null),
  nroPlacas: (sql.TYPES.Int, null),
  fechaInscripcion: (sql.TYPES.DateTime, ""),
  modeloID: (sql.TYPES.Numeric, ""),
  colorID: (sql.TYPES.Numeric, ""),
  tipoVehiculoID: (sql.TYPES.Numeric, ""),
  combustibleID: (sql.TYPES.Numeric, ""),
  unidadCargaID: (sql.TYPES.Numeric, ""),
  unidadPesoID: (sql.TYPES.Numeric, ""),
  traccionID: (sql.TYPES.Numeric, ""),
  potenciaMotorID: (sql.TYPES.Numeric, ""),
  unidadPotenciaID: (sql.TYPES.Numeric, ""),
  carroceriaID: (sql.TYPES.Numeric, ""),
};

module.exports = Adquirentechema;
