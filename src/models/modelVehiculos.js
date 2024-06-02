var sql = require("mssql");

const VehiculoSchema = {
  vehiculoId: (sql.TYPES.Numeric, ""),
  ppu: (sql.TYPES.VarChar, ""),
  ppuDV: (sql.TYPES.VarChar, ""),
  anoFabricracion: (sql.TYPES.Int, null),
  puertas: (sql.TYPES.Int, null),
  asientos: (sql.TYPES.Int, null),
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
  modeloId: (sql.TYPES.Numeric, ""),
  colorId: (sql.TYPES.Numeric, ""),
  tipoVehiculoId: (sql.TYPES.Numeric, ""),
  combustibleId: (sql.TYPES.Numeric, ""),
  unidadCargaId: (sql.TYPES.Numeric, ""),
  unidadPesoId: (sql.TYPES.Numeric, ""),
  traccionId: (sql.TYPES.Numeric, ""),
  potenciaMotorId: (sql.TYPES.Numeric, ""),
  unidadPotenciaId: (sql.TYPES.Numeric, ""),
  carroceriaId: (sql.TYPES.Numeric, ""),
};

module.exports = VehiculoSchema;
