var sql = require("mssql");
const vehiculos = require("../models/modelVehiculo");
const estados = require("../models/modelEstado");
const comunas = require("../models/modelComuna");
const oficinas = require("../models/modelOficina");
const observaciones = require("../models/modelObservacion");
const cantidadPlacas = require("./modelGenerales").default;
const valoresCobro = require("../models/modelValoresCobro");
const Mensajes = require("./modelGenerales").Mensajes;

const PrimeraInscripcionSchema = {
  mensaje: null,
  datosTramita: {
    primeraInscripcionID: ((sql.TYPES.Numeric, 0), -1),
    empresaID: ((sql.TYPES.Numeric, 0), -1),
    ppu: (sql.TYPES.VarChar, ""),
    estadoID: ((sql.TYPES.Numeric, 0), -1),
    estado: estados,
    numeroOperacion: ((sql.TYPES.VarChar, ""), ""),
    origen: (sql.TYPES.VarChar, ""),
    numeroFactura: (sql.TYPES.VarChar, ""),
    rutCliente: (sql.TYPES.VarChar, ""),
    nombreRazonSocialCliente: (sql.TYPES.VarChar, ""),
    vencimientoContratoLeasing: (sql.TYPES.DateTime, null),
    rutRepresentanteLegal: (sql.TYPES.VarChar, ""),
    nombreRazonSocialRepresentanteLegal: (sql.TYPES.VarChar, ""),
    comunaID: (sql.TYPES.Numeric, 0),
    comuna: comunas,
    contacto: (sql.TYPES.VarChar, ""),
    telefonoContacto: (sql.TYPES.VarChar, ""),
    emailContacto: (sql.TYPES.VarChar, ""),

    numeroSolicitud: (sql.TYPES.VarChar, ""),
    estaEntregado: (sql.TYPES.Bit, 0),
    oficinaID: (sql.TYPES.Numeric, 0),
    oficina: oficinas,
    fechaSolicitudRNVM: (sql.TYPES.DateTime, null),
    numeroValija: (sql.TYPES.VarChar, ""),
    ejecutivo: (sql.TYPES.VarChar, ""),
    sucursal: (sql.TYPES.VarChar, ""),

    fechaRecepcionBanco: (sql.TYPES.DateTime, null),
    fechaPadron: (sql.TYPES.DateTime, null),
    codigoDespachoCorreo: (sql.TYPES.VarChar, ""),

    observacionID: (sql.TYPES.Numeric, 0),
    observacion: observaciones,
    numeroPlacas: cantidadPlacas,
    chktag: (sql.TYPES.Bit, 0),
    chkPlacas: (sql.TYPES.Bit, 0),

    fechaIngresoRNVM: (sql.TYPES.DateTime, null),
    observaciones: (sql.TYPES.VarChar, ""),
    correlativoEntrega: (sql.TYPES.VarChar, ""),
    folio: (sql.TYPES.VarChar, ""),
    EstadoMeraTenencia: (sql.TYPES.VarChar, ""),

    valorPrimeraInscripcionID: (sql.TYPES.Numeric, 0),
    valorPrimeraInscripcion: valoresCobro,

    valorTramitaID: (sql.TYPES.Numeric, 0),
    valorTramita: valoresCobro,

    valorServicioTagID: (sql.TYPES.Numeric, 0),
    valorServicioTag: valoresCobro,

    valorNotariaID: (sql.TYPES.Numeric, 0),
    valorNotaria: valoresCobro,

    valorDecpachoCorreoID: (sql.TYPES.Numeric, 0),
    valorDecpachoCorreo: valoresCobro,

    fechaIngresoTAG: (sql.TYPES.DateTime, null),
    f88: (sql.TYPES.Bit, 0),
    valorF88: (sql.TYPES.Numeric, 0),
    flCertCum5594: (sql.TYPES.Bit, 0),
    fotocopiaRutBanco: (sql.TYPES.Bit, 0),
    certificadoDS5594: (sql.TYPES.Bit, 0),
    chk1U: (sql.TYPES.Bit, 0),
    chk2U: (sql.TYPES.Bit, 0),
    chk3U: (sql.TYPES.Bit, 0),
    chk4U: (sql.TYPES.Bit, 0),
    solicitudPrimeraInscripcion: (sql.TYPES.Bit, 0),
    certificadoLeasing: (sql.TYPES.Bit, 0),
    certificadoCombustibles: (sql.TYPES.Bit, 0),
    contratoTelevia: (sql.TYPES.Bit, 0),
    convenioPAC: (sql.TYPES.Bit, 0),
    dispositivoTelevia: (sql.TYPES.Bit, 0),
    contratoLeasing: (sql.TYPES.Bit, 0),
    padron: (sql.TYPES.Bit, 0),
    pendienteContrato: (sql.TYPES.Bit, 0),
    pendienteAnotacionMeraTenencia: (sql.TYPES.Bit, 0),
    despachoExterno: (sql.TYPES.Bit, 0),
    informativoSeguro: (sql.TYPES.Bit, 0),

    fechaCreacion: (sql.TYPES.DateTime, null),
    fechaActualizacion: (sql.TYPES.DateTime, null),
    AnoProceso: (sql.TYPES.Numeric, 0),
    AnoFiltro: (sql.TYPES.Numeric, 0),
    clienteID: (sql.TYPES.Numeric, 0),
    usuarioID: (sql.TYPES.Numeric, 0),
  },
  datosVehiculo: {
    vehiculoID: (sql.TYPES.Numeric, 0),
    vehiculo: vehiculos,
  },
  datosAdquirente: {
    adquirenteID: (sql.TYPES.Numeric, ""),
    rut: (sql.TYPES.VarChar, ""),
    nombreRazonSocial: (sql.TYPES.VarChar, ""),
    direccion: (sql.TYPES.Int, null),
    numero: (sql.TYPES.Int, null),
    compplemento: (sql.TYPES.Int, null),
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
  },
  documentosRecibidos: [
    {
      id: (sql.TYPES.Numeric, null),
      primeraInscripcionID: (sql.TYPES.Numeric, null),
      tipoDocumentoID: (sql.TYPES.Numeric, null),
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
  ],
};
module.exports = PrimeraInscripcionSchema;