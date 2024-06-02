var sql = require("mssql");

const modelVehiculos = require("./modelVehiculos");
const modelEstados = require("../models/modelEstado");
const modelComunas = require("../models/modelComuna");
const modelOficinas = require("../models/modelOficina");
const modelObservaciones = require("../models/modelObservacion");
const modelCantidadPlacas = require("./modelGenerales").default;
const modelValoresCobro = require("../models/modelValoresCobro");
const modelPersonaEmpresas = require("../models/modelPersonasEmpresas");
const modelDocumentoRecibido = require("../models/modelDocumentosRecibidos");
const modelDespachos = require("../models/modelDespachos");
const modelGenerales = require("../models/modelGenerales");

let adquirente = modelPersonaEmpresas;

const PrimeraInscripcionSchema = {
  mensaje: null,
  datosTramita: {
    primeraInscripcionId: ((sql.TYPES.Numeric, 0), -1),
    empresaId: ((sql.TYPES.Numeric, 0), -1),
    ppu: (sql.TYPES.VarChar, ""),
    estadoId: ((sql.TYPES.Numeric, 0), -1),
    estado: modelEstados,
    numeroOperacion: ((sql.TYPES.VarChar, ""), ""),
    origen: (sql.TYPES.VarChar, ""),
    numeroFactura: (sql.TYPES.VarChar, ""),
    rutCliente: (sql.TYPES.VarChar, ""),
    nombreRazonSocialCliente: (sql.TYPES.VarChar, ""),
    vencimientoContratoLeasing: (sql.TYPES.DateTime, null),
    representanteLegalId: (sql.TYPES.VarChar, ""),
    nombreRazonSocialRepresentanteLegal: (sql.TYPES.VarChar, ""),
    comunaId: (sql.TYPES.Numeric, 0),
    comuna: modelComunas,
    contacto: (sql.TYPES.VarChar, ""),
    telefonoContacto: (sql.TYPES.VarChar, ""),
    emailContacto: (sql.TYPES.VarChar, ""),

    numeroSolicitud: (sql.TYPES.VarChar, ""),
    estaEntregado: (sql.TYPES.Bit, 0),
    oficinaId: (sql.TYPES.Numeric, 0),
    oficina: modelOficinas,
    fechaSolicitudRnvm: (sql.TYPES.DateTime, null),
    numeroValija: (sql.TYPES.VarChar, ""),
    ejecutivo: (sql.TYPES.VarChar, ""),
    sucursal: (sql.TYPES.VarChar, ""),

    fechaRecepcionBanco: (sql.TYPES.DateTime, null),
    fechaPadron: (sql.TYPES.DateTime, null),
    codigoDespachoCorreo: (sql.TYPES.VarChar, ""),

    observacionId: (sql.TYPES.Numeric, 0),
    observacion: modelObservaciones,
    numeroPlacas: modelGenerales.cantidadPlacas,
    chktag: (sql.TYPES.Bit, 0),
    chkPlacas: (sql.TYPES.Bit, 0),

    numeroPlacas: (sql.TYPES.DateTime, null),
    observaciones: (sql.TYPES.VarChar, ""),
    correlativoEntrega: (sql.TYPES.VarChar, ""),
    folio: (sql.TYPES.VarChar, ""),

    valorPrimeraInscripcionId: (sql.TYPES.Numeric, 0),
    valorPrimeraInscripcion: modelValoresCobro,

    valorTramitaId: (sql.TYPES.Numeric, 0),
    valorTramita: modelValoresCobro,

    valorServicioTagId: (sql.TYPES.Numeric, 0),
    valorServicioTag: modelValoresCobro,

    valorNotariaId: (sql.TYPES.Numeric, 0),
    valorNotaria: modelValoresCobro,

    valorDespachoCorreoId: (sql.TYPES.Numeric, 0),
    valorDespachoCorreo: modelValoresCobro,

    fechaIngresoTag: (sql.TYPES.DateTime, null),
    f88: (sql.TYPES.Bit, 0),
    valorF88: (sql.TYPES.Numeric, 0),
    flCertCum5594: (sql.TYPES.Bit, 0),
    fotocopiaRutBanco: (sql.TYPES.Bit, 0),
    certificadoDs5594: (sql.TYPES.Bit, 0),
    chk1U: (sql.TYPES.Bit, 0),
    chk2U: (sql.TYPES.Bit, 0),
    chk3U: (sql.TYPES.Bit, 0),
    chk4U: (sql.TYPES.Bit, 0),
    solicitudPrimeraInscripcion: (sql.TYPES.Bit, 0),
    certificadoLeasing: (sql.TYPES.Bit, 0),
    certificadoCombustibles: (sql.TYPES.Bit, 0),
    contratoTelevia: (sql.TYPES.Bit, 0),
    convenioPac: (sql.TYPES.Bit, 0),
    dispositivoTelevia: (sql.TYPES.Bit, 0),
    contratoLeasing: (sql.TYPES.Bit, 0),
    padron: (sql.TYPES.Bit, 0),
    pendienteContrato: (sql.TYPES.Bit, 0),
    pendienteAnotacionMeraTenencia: (sql.TYPES.Bit, 0),
    despachoExterno: (sql.TYPES.Bit, 0),
    informativoSeguro: (sql.TYPES.Bit, 0),

    fechaCreacion: (sql.TYPES.DateTime, null),
    fechaActualizacion: (sql.TYPES.DateTime, null),
    anoProceso: (sql.TYPES.Numeric, 0),
    anoFiltro: (sql.TYPES.Numeric, 0),
    clienteId: (sql.TYPES.Numeric, 0),
    usuarioId: (sql.TYPES.Numeric, 0),
  },
  datosVehiculo: { modelVehiculos },
  datosAdquirente: { adquirente },
  documentosRecibidos: [modelDocumentoRecibido],
  despachos: [modelDespachos],
};
module.exports = PrimeraInscripcionSchema;
