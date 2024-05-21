var sql = require("mssql");

const VehiculoSchema = {
  VehiculoID: (sql.TYPES.Numeric, ""),
  PPU: (sql.TYPES.VarChar, ""),
  PPUDV: (sql.TYPES.VarChar, ""),
  AnoFabricracion: (sql.TYPES.Int, null),
  Puertas: (sql.TYPES.Int, null),
  Asientos: (sql.TYPES.Int, null),
  NroMotor: (sql.TYPES.VarChar, ""),
  NroChasis: (sql.TYPES.VarChar, ""),
  NroSerie: (sql.TYPES.VarChar, ""),
  NroVin: (sql.TYPES.VarChar, ""),
  Carga: (sql.TYPES.Int, null),
  PesoBruto: (sql.TYPES.Int, ""),
  OtraCarroceria: (sql.TYPES.VarChar, ""),
  NroEjes: (sql.TYPES.Int, null),
  CodigoCIT: (sql.TYPES.VarChar, ""),
  NroEjesDisponibles: (sql.TYPES.Int, null),
  NroPlacas: (sql.TYPES.Int, null),
  FechaInscripcion: (sql.TYPES.DateTime, ""),
  ModeloID: (sql.TYPES.Numeric, ""),
  ColorID: (sql.TYPES.Numeric, ""),
  TipoVehiculoID: (sql.TYPES.Numeric, ""),
  CombustibleID: (sql.TYPES.Numeric, ""),
  UnidadCargaID: (sql.TYPES.Numeric, ""),
  UnidadPesoID: (sql.TYPES.Numeric, ""),
  TraccionID: (sql.TYPES.Numeric, ""),
  PotenciaMotorID: (sql.TYPES.Numeric, ""),
  UnidadPotenciaID: (sql.TYPES.Numeric, ""),
  CarroceriaID: (sql.TYPES.Numeric, ""),
};

module.exports = VehiculoSchema;
