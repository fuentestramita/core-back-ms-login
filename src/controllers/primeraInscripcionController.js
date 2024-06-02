const Service = require("../services/ValidateService"); // Aqui estan las funciones de validacion de login y token
const fGenerales = require("../controllers/generalesController"); // Aqui estan las funciones generales

// Aqui estan los objetos con la estructura de la BD
const modelGenerales = require("../models/modelGenerales");
const modelPrimera = require("../models/modelPrimeraInscripcion");
const modelPersonasEmpresas = require("../models/modelPersonasEmpresas");
const modelVehiculos = require("../models/modelVehiculos");
const modelDocumentosRecibidos = require("../models/modelDocumentosRecibidos");
const modelDespachos = require("../models/modelDespachos");

// Aqui estan los llamados a los SPs
const dbPrimera = require("../database/PrimeraInscripcionDB");
const dbDespachos = require("../database/DespachosDB");
const dbDocumentosRecibidos = require("../database/DocumentosRecibidosDB");
const dbPersonaEmpresas = require("../database/PersonasEmpresasDB");
const dbVehiculos = require("../database/VehiculosDB");

const getPrimeraInscripcion = async (req, res) => {
  try {
    const primeraSearch = {
      clienteID: req.body.clienteID,
      primeraInscripcionID: req.body.primeraInscripcionID,
      PPU: req.body.PPU,
      NUMFactura: req.body.NUMFactura,
      RUTFactura: req.body.RUTFactura,
    };

    let rsPrimera = await dbPrimera.SEL_PrimeraInscripcion(primeraSearch);
    let rsGenerales = await dbPrimera.SEL_ALL();

    // Si no existe Primera inscripcipon Se crea objeto con valores por defecto
    if (rsPrimera.datos.length == 0) {
      const primeraNOTFound = { ...modelPrimera, mensaje: modelGenerales.Mensajes.NOT_FOUND };

      primeraNOTFound.datosTramita.estado = fGenerales.setSelected(rsGenerales.datos[modelGenerales.TablasGenerales.ESTADOS], 0);
      primeraNOTFound.datosTramita.comuna = fGenerales.setSelected(rsGenerales.datos[modelGenerales.TablasGenerales.COMUNAS], 0);
      primeraNOTFound.datosTramita.oficina = fGenerales.setSelected(rsGenerales.datos[modelGenerales.TablasGenerales.OFICINAS], 0);
      primeraNOTFound.datosTramita.observacion = fGenerales.setSelected(rsGenerales.datos[modelGenerales.TablasGenerales.OBSERVACIONES], 0);
      primeraNOTFound.datosTramita.numeroPlacas = modelGenerales.TablasGenerales.cantidadPlacas;
      primeraNOTFound.datosTramita.valorPrimeraInscripcion = fGenerales.setSelected(
        rsGenerales.datos[modelGenerales.TablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "PRIMERA INSCRIPCION"),
        0 // Valor por defecto
      );
      primeraNOTFound.datosTramita.valorTramita = fGenerales.setSelected(
        rsGenerales.datos[modelGenerales.TablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "TRAMITA"),
        0 // Valor por defecto
      );
      primeraNOTFound.datosTramita.valorServicioTag = fGenerales.setSelected(
        rsGenerales.datos[modelGenerales.TablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "VALOR TAG"),
        0 // Valor por defecto
      );
      primeraNOTFound.datosTramita.valorNotaria = fGenerales.setSelected(
        rsGenerales.datos[modelGenerales.TablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "NOTARIA"),
        0 // Valor por defecto
      );
      primeraNOTFound.datosTramita.valorDespachoCorreo = fGenerales.setSelected(
        rsGenerales.datos[modelGenerales.TablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "DESPACHO"),
        0 // Valor por defecto
      );
      primeraNOTFound.datosVehiculo = modelVehiculos;
      primeraNOTFound.datosAdquirente = modelPersonasEmpresas;
      primeraNOTFound.documentosRecibidos = modelDocumentosRecibidos;
      primeraNOTFound.despachos = modelDespachos;

      return res.status(200).json(primeraNOTFound);
    } // Si exsite primera inscripcion
    else {
      const primeraFound = { ...modelPrimera, mensaje: modelGenerales.Mensajes.REG_FOUND };

      primeraFound.datosTramita.primeraInscripcionId = rsPrimera.datos[0].primeraInscripcionId;
      primeraFound.datosTramita.empresaId = rsPrimera.datos[0].empresaId;
      primeraFound.datosTramita.estadoId = rsPrimera.datos[0].estadoId;
      primeraFound.datosTramita.ppu = rsPrimera.datos[0].ppu;
      primeraFound.datosTramita.numeroOperacion = rsPrimera.datos[0].numeroOperacion;
      primeraFound.datosTramita.origen = rsPrimera.datos[0].origen;
      primeraFound.datosTramita.numeroFactura = rsPrimera.datos[0].numeroFactura;
      primeraFound.datosTramita.rutCliente = rsPrimera.datos[0].rutCliente;
      primeraFound.datosTramita.vencimientoContratoLeasing = rsPrimera.datos[0].vencimientoContratoLeasing;
      primeraFound.datosTramita.rutRepresentanteLegal = rsPrimera.datos[0].rutRepresentanteLegal;
      primeraFound.datosTramita.contacto = rsPrimera.datos[0].contacto;
      primeraFound.datosTramita.telefonoContacto = rsPrimera.datos[0].telefonoContacto;
      primeraFound.datosTramita.emailContacto = rsPrimera.datos[0].emailContacto;
      primeraFound.datosTramita.numeroSolicitud = rsPrimera.datos[0].numeroSolicitud;
      primeraFound.datosTramita.estaEntregado = rsPrimera.datos[0].estaEntregado;
      primeraFound.datosTramita.fechaSolicitudRnvm = rsPrimera.datos[0].fechaSolicitudRnvm;
      primeraFound.datosTramita.numeroValija = rsPrimera.datos[0].numeroValija;
      primeraFound.datosTramita.ejecutivo = rsPrimera.datos[0].ejecutivo;
      primeraFound.datosTramita.sucursal = rsPrimera.datos[0].sucursal;
      primeraFound.datosTramita.fechaRecepcionBanco = rsPrimera.datos[0].fechaRecepcionBanco;
      primeraFound.datosTramita.fechaPadron = rsPrimera.datos[0].fechaPadron;
      primeraFound.datosTramita.codigoDespachoCorreo = rsPrimera.datos[0].codigoDespachoCorreo;
      primeraFound.datosTramita.numeroPlacas = rsPrimera.datos[0].numeroPlacas;
      primeraFound.datosTramita.fechaIngresoRnvm = rsPrimera.datos[0].fechaIngresoRnvm;
      primeraFound.datosTramita.observaciones = rsPrimera.datos[0].observaciones;
      primeraFound.datosTramita.correlativoEntrega = rsPrimera.datos[0].correlativoEntrega;
      primeraFound.datosTramita.folio = rsPrimera.datos[0].folio;
      primeraFound.datosTramita.fechaIngresoTag = rsPrimera.datos[0].fechaIngresoTag;
      primeraFound.datosTramita.f88 = rsPrimera.datos[0].f88;
      primeraFound.datosTramita.valorF88 = rsPrimera.datos[0].valorF88;
      primeraFound.datosTramita.flCertCum5594 = rsPrimera.datos[0].flCertCum5594;
      primeraFound.datosTramita.fotocopiaRutBanco = rsPrimera.datos[0].fotocopiaRutBanco;
      primeraFound.datosTramita.certificadoDs5594 = rsPrimera.datos[0].certificadoDs5594;
      primeraFound.datosTramita.chk1U = rsPrimera.datos[0].chk1U;
      primeraFound.datosTramita.chk2U = rsPrimera.datos[0].chk2U;
      primeraFound.datosTramita.chk3U = rsPrimera.datos[0].chk3U;
      primeraFound.datosTramita.chk4U = rsPrimera.datos[0].chk4U;
      primeraFound.datosTramita.solicitudPrimeraInscripcion = rsPrimera.datos[0].solicitudPrimeraInscripcion;
      primeraFound.datosTramita.certificadoLeasing = rsPrimera.datos[0].certificadoLeasing;
      primeraFound.datosTramita.certificadoCombustibles = rsPrimera.datos[0].certificadoCombustibles;
      primeraFound.datosTramita.contratoTelevia = rsPrimera.datos[0].contratoTelevia;
      primeraFound.datosTramita.convenioPac = rsPrimera.datos[0].convenioPac;
      primeraFound.datosTramita.dispositivoTelevia = rsPrimera.datos[0].dispositivoTelevia;
      primeraFound.datosTramita.contratoLeasing = rsPrimera.datos[0].contratoLeasing;
      primeraFound.datosTramita.padron = rsPrimera.datos[0].padron;
      primeraFound.datosTramita.pendienteContrato = rsPrimera.datos[0].pendienteContrato;
      primeraFound.datosTramita.pendienteAnotacionMeraTenencia = rsPrimera.datos[0].pendienteAnotacionMeraTenencia;
      primeraFound.datosTramita.despachoExterno = rsPrimera.datos[0].despachoExterno;
      primeraFound.datosTramita.informativoSeguro = rsPrimera.datos[0].informativoSeguro;
      primeraFound.datosTramita.fechaCreacion = rsPrimera.datos[0].fechaCreacion;
      primeraFound.datosTramita.fechaActualizacion = rsPrimera.datos[0].fechaActualizacion;
      primeraFound.datosTramita.comunaId = rsPrimera.datos[0].comunaId;
      primeraFound.datosTramita.estadoId = rsPrimera.datos[0].estadoId;
      primeraFound.datosTramita.observacionId = rsPrimera.datos[0].observacionId;
      primeraFound.datosTramita.valorCobroId = rsPrimera.datos[0].valorCobroId;
      primeraFound.datosTramita.clienteId = rsPrimera.datos[0].clienteId;
      primeraFound.datosTramita.nombreRazonSocialCliente = rsPrimera.datos[0].nombreRazonSocialCliente;
      primeraFound.datosTramita.representanteLegalId = rsPrimera.datos[0].representanteLegalID;
      primeraFound.datosTramita.nombreRazonSocialRepresentanteLegal = rsPrimera.datos[0].nombreRazonSocialRepresentanteLegal;
      primeraFound.datosTramita.usuarioId = rsPrimera.datos[0].usuarioId;
      primeraFound.datosTramita.adquirenteId = rsPrimera.datos[0].adquirenteId;
      primeraFound.datosTramita.valorPrimeraInscripcionId = rsPrimera.datos[0].valorPrimeraInscripcionId;
      primeraFound.datosTramita.valorTramitaId = rsPrimera.datos[0].valorTramitaId;
      primeraFound.datosTramita.valorServicioTagId = rsPrimera.datos[0].valorServicioTagId;
      primeraFound.datosTramita.valorNotariaId = rsPrimera.datos[0].valorNotariaId;
      primeraFound.datosTramita.valorDespachoCorreoId = rsPrimera.datos[0].valorDespachoCorreoId;
      primeraFound.datosTramita.oficinaId = rsPrimera.datos[0].oficinaId;
      primeraFound.datosTramita.anoProceso = rsPrimera.datos[0].anoProceso;
      primeraFound.datosTramita.anoFiltro = rsPrimera.datos[0].anoFiltro;
      primeraFound.datosTramita.chktag = rsPrimera.datos[0].chktag;
      primeraFound.datosTramita.chkPlacas = rsPrimera.datos[0].chkPlacas;
      primeraFound.datosTramita.estado = fGenerales.setSelected(rsGenerales.datos[modelGenerales.TablasGenerales.ESTADOS], rsPrimera.datos[0].estadoId);
      primeraFound.datosTramita.comunaId = rsPrimera.datos[0].comunaID;
      primeraFound.datosTramita.comuna = fGenerales.setSelected(rsGenerales.datos[modelGenerales.TablasGenerales.COMUNAS], rsPrimera.datos[0].comunaId);
      primeraFound.datosTramita.oficinaId = rsPrimera.datos[0].oficinaID;
      primeraFound.datosTramita.oficina = fGenerales.setSelected(rsGenerales.datos[modelGenerales.TablasGenerales.OFICINAS], rsPrimera.datos[0].oficinaId);
      primeraFound.datosTramita.observacionId = rsPrimera.datos[0].observacionId;
      primeraFound.datosTramita.observacion = fGenerales.setSelected(rsGenerales.datos[modelGenerales.TablasGenerales.OBSERVACIONES], rsPrimera.datos[0].observacionId);
      primeraFound.datosTramita.numeroPlacas = modelGenerales.TablasGenerales.cantidadPlacas;
      primeraFound.datosTramita.valorPrimeraInscripcionId = rsPrimera.datos[0].valorPrimeraInscripcionId;

      primeraFound.datosTramita.valorPrimeraInscripcion = fGenerales.setSelected(
        rsGenerales.datos[modelGenerales.TablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "PRIMERA INSCRIPCION"),
        rsPrimera.datos[0].valorPrimeraInscripcionId
      );
      primeraFound.datosTramita.valorTramita = fGenerales.setSelected(
        rsGenerales.datos[modelGenerales.TablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "TRAMITA"),
        rsPrimera.datos[0].valorTramitaId
      );
      primeraFound.datosTramita.valorServicioTag = fGenerales.setSelected(
        rsGenerales.datos[modelGenerales.TablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "VALOR TAG"),
        rsPrimera.datos[0].valorServicioTagId
      );
      primeraFound.datosTramita.valorNotaria = fGenerales.setSelected(
        rsGenerales.datos[modelGenerales.TablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "NOTARIA"),
        rsPrimera.datos[0].valorNotariaId
      );
      primeraFound.datosTramita.valorDespachoCorreo = fGenerales.setSelected(
        rsGenerales.datos[modelGenerales.TablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "DESPACHO"),
        rsPrimera.datos[0].valorDespachoCorreoId
      );

      let rsVehiculo = await dbVehiculos.SEL_Vehiculos(rsPrimera.datos[0].vehiculoId); // Busco los datos del vehiculo
      primeraFound.datosVehiculo = rsVehiculo.datos.length > 0 ? rsVehiculo.datos : modelVehiculos;

      let rsAdquirente = await dbPersonaEmpresas.SEL_PersonasEmpresas(rsPrimera.datos[0].adquirenteId); // Busco los datos del Adquirente
      primeraFound.datosAdquirente = rsAdquirente.datos.length > 0 ? rsAdquirente.datos : modelPersonasEmpresas;

      let rsdocumentosRecibidos = await dbDocumentosRecibidos.SEL_DocumentosRecibidos(rsPrimera.datos[0].primeraInscripcionId); // Busco los Documentos Recibidos
      primeraFound.documentosRecibidos = rsdocumentosRecibidos.datos.length > 0 ? rsdocumentosRecibidos.datos : modelDocumentosRecibidos;

      let rsDespachos = await dbDespachos.SEL_Despachos(rsPrimera.datos[0].primeraInscripcionId); // Busco los Despacho
      primeraFound.despachos = rsDespachos.datos.length > 0 ? rsDespachos.datos : modelDespachos;

      return res.status(200).json(primeraFound);
    }
  } catch (error) {
    console.log(error.json);
  }
};

module.exports = { getPrimeraInscripcion };
