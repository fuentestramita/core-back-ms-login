const Service = require("../services/ValidateService");
const Primera = require("../models/modelPrimeraInscripcion");
const tablasGenerales = require("../models/modelGenerales");
const fGenerales = require("../controllers/generalesController");
const TipoCobro = require("../models/modelValoresCobro");
const personaEmpresas = require("../models/modelPersonasEmpresas");
const vehiculos = require("../models/modelVehiculo");
const documentosRecibidos = require("../models/modelDocumentosRecibidos");
const despachos = require("../models/modelDespachos");
const adquirentes = require("../models/modelAdquirente");
const dbPrimera = require("../database/PrimeraInscripcionDB");
const dbDespachos = require("../database/DespachosDB");
const dbDocumentosRecibidos = require("../database/DocumentosRecibidosDB");

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
      let primera = Primera;
      primera.datosTramita.estado = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.ESTADOS], primera.datosTramita.estadoID);
      primera.datosTramita.comuna = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.COMUNAS], primera.datosTramita.comunaID);
      primera.datosTramita.oficina = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.OFICINAS], primera.datosTramita.oficinaID);
      primera.datosTramita.observacion = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.OBSERVACIONES], primera.datosTramita.observacionID);
      primera.datosTramita.numeroPlacas = tablasGenerales.cantidadPlacas;
      primera.datosTramita.valorPrimeraInscripcion = fGenerales.setSelected(
        rsGenerales.datos[tablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "PRIMERA INSCRIPCION"),
        0 // Valor por defecto
      );
      primera.datosTramita.valorTramita = fGenerales.setSelected(
        rsGenerales.datos[tablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "TRAMITA"),
        0 // Valor por defecto
      );
      primera.datosTramita.valorServicioTag = fGenerales.setSelected(
        rsGenerales.datos[tablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "VALOR TAG"),
        0 // Valor por defecto
      );
      primera.datosTramita.valorNotaria = fGenerales.setSelected(
        rsGenerales.datos[tablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "NOTARIA"),
        0 // Valor por defecto
      );
      primera.datosTramita.valorDespachoCorreo = fGenerales.setSelected(
        rsGenerales.datos[tablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "DESPACHO"),
        0 // Valor por defecto
      );
      primera.datosVehiculo = vehiculos;
      primera.datosAdquirente = personaEmpresas;

      let rsDoctosRecibidos = await dbDocumentosRecibidos.SEL_DocumentosRecibidos(0);
      let rsDespachos = await dbDespachos.SEL_Despachos(0);

      primera.documentosRecibidos = rsDoctosRecibidos.datos.length > 0 ? rsDoctosRecibidos : documentosRecibidos;
      primera.despachos = rsDespachos.datos.length > 0 ? rsDoctosRecibidos : despachos;

      res.status(200).json(primera);

      return res;
    } // Si exsite primera inscripcion
    else {
      let primera = Primera;
      primera.datosTramita.primeraInscripcionId = rsPrimera.datos[0].primeraInscripcionId;
      primera.datosTramita.empresaId = rsPrimera.datos[0].empresaId;
      primera.datosTramita.estadoId = rsPrimera.datos[0].estadoId;
      primera.datosTramita.ppu = rsPrimera.datos[0].ppu;
      primera.datosTramita.numeroOperacion = rsPrimera.datos[0].numeroOperacion;
      primera.datosTramita.origen = rsPrimera.datos[0].origen;
      primera.datosTramita.numeroFactura = rsPrimera.datos[0].numeroFactura;
      primera.datosTramita.rutCliente = rsPrimera.datos[0].rutCliente;
      primera.datosTramita.vencimientoContratoLeasing = rsPrimera.datos[0].vencimientoContratoLeasing;
      primera.datosTramita.rutRepresentanteLegal = rsPrimera.datos[0].rutRepresentanteLegal;
      primera.datosTramita.contacto = rsPrimera.datos[0].contacto;
      primera.datosTramita.telefonoContacto = rsPrimera.datos[0].telefonoContacto;
      primera.datosTramita.emailContacto = rsPrimera.datos[0].emailContacto;
      primera.datosTramita.numeroSolicitud = rsPrimera.datos[0].numeroSolicitud;
      primera.datosTramita.estaEntregado = rsPrimera.datos[0].estaEntregado;
      primera.datosTramita.fechaSolicitudRnvm = rsPrimera.datos[0].fechaSolicitudRnvm;
      primera.datosTramita.numeroValija = rsPrimera.datos[0].numeroValija;
      primera.datosTramita.ejecutivo = rsPrimera.datos[0].ejecutivo;
      primera.datosTramita.sucursal = rsPrimera.datos[0].sucursal;
      primera.datosTramita.fechaRecepcionBanco = rsPrimera.datos[0].fechaRecepcionBanco;
      primera.datosTramita.fechaPadron = rsPrimera.datos[0].fechaPadron;
      primera.datosTramita.codigoDespachoCorreo = rsPrimera.datos[0].codigoDespachoCorreo;
      primera.datosTramita.numeroPlacas = rsPrimera.datos[0].numeroPlacas;
      primera.datosTramita.fechaIngresoRnvm = rsPrimera.datos[0].fechaIngresoRnvm;
      primera.datosTramita.observaciones = rsPrimera.datos[0].observaciones;
      primera.datosTramita.correlativoEntrega = rsPrimera.datos[0].correlativoEntrega;
      primera.datosTramita.folio = rsPrimera.datos[0].folio;
      primera.datosTramita.fechaIngresoTag = rsPrimera.datos[0].fechaIngresoTag;
      primera.datosTramita.f88 = rsPrimera.datos[0].f88;
      primera.datosTramita.valorF88 = rsPrimera.datos[0].valorF88;
      primera.datosTramita.flCertCum5594 = rsPrimera.datos[0].flCertCum5594;
      primera.datosTramita.fotocopiaRutBanco = rsPrimera.datos[0].fotocopiaRutBanco;
      primera.datosTramita.certificadoDs5594 = rsPrimera.datos[0].certificadoDs5594;
      primera.datosTramita.chk1U = rsPrimera.datos[0].chk1U;
      primera.datosTramita.chk2U = rsPrimera.datos[0].chk2U;
      primera.datosTramita.chk3U = rsPrimera.datos[0].chk3U;
      primera.datosTramita.chk4U = rsPrimera.datos[0].chk4U;
      primera.datosTramita.solicitudPrimeraInscripcion = rsPrimera.datos[0].solicitudPrimeraInscripcion;
      primera.datosTramita.certificadoLeasing = rsPrimera.datos[0].certificadoLeasing;
      primera.datosTramita.certificadoCombustibles = rsPrimera.datos[0].certificadoCombustibles;
      primera.datosTramita.contratoTelevia = rsPrimera.datos[0].contratoTelevia;
      primera.datosTramita.convenioPac = rsPrimera.datos[0].convenioPac;
      primera.datosTramita.dispositivoTelevia = rsPrimera.datos[0].dispositivoTelevia;
      primera.datosTramita.contratoLeasing = rsPrimera.datos[0].contratoLeasing;
      primera.datosTramita.padron = rsPrimera.datos[0].padron;
      primera.datosTramita.pendienteContrato = rsPrimera.datos[0].pendienteContrato;
      primera.datosTramita.pendienteAnotacionMeraTenencia = rsPrimera.datos[0].pendienteAnotacionMeraTenencia;
      primera.datosTramita.despachoExterno = rsPrimera.datos[0].despachoExterno;
      primera.datosTramita.informativoSeguro = rsPrimera.datos[0].informativoSeguro;
      primera.datosTramita.fechaCreacion = rsPrimera.datos[0].fechaCreacion;
      primera.datosTramita.fechaActualizacion = rsPrimera.datos[0].fechaActualizacion;
      primera.datosTramita.comunaId = rsPrimera.datos[0].comunaId;
      primera.datosTramita.estadoId = rsPrimera.datos[0].estadoId;
      primera.datosTramita.observacionId = rsPrimera.datos[0].observacionId;
      primera.datosTramita.valorCobroId = rsPrimera.datos[0].valorCobroId;
      primera.datosTramita.clienteId = rsPrimera.datos[0].clienteId;
      primera.datosTramita.nombreRazonSocialCliente = rsPrimera.datos[0].nombreRazonSocialCliente;
      primera.datosTramita.representanteLegalId = rsPrimera.datos[0].representanteLegalID;
      primera.datosTramita.nombreRazonSocialRepresentanteLegal = rsPrimera.datos[0].nombreRazonSocialRepresentanteLegal;
      primera.datosTramita.usuarioId = rsPrimera.datos[0].usuarioId;
      primera.datosTramita.adquirenteId = rsPrimera.datos[0].adquirenteId;
      primera.datosTramita.valorPrimeraInscripcionId = rsPrimera.datos[0].valorPrimeraInscripcionId;
      primera.datosTramita.valorTramitaId = rsPrimera.datos[0].valorTramitaId;
      primera.datosTramita.valorServicioTagId = rsPrimera.datos[0].valorServicioTagId;
      primera.datosTramita.valorNotariaId = rsPrimera.datos[0].valorNotariaId;
      primera.datosTramita.valorDespachoCorreoId = rsPrimera.datos[0].valorDespachoCorreoId;
      primera.datosTramita.oficinaId = rsPrimera.datos[0].oficinaId;
      primera.datosTramita.anoProceso = rsPrimera.datos[0].anoProceso;
      primera.datosTramita.anoFiltro = rsPrimera.datos[0].anoFiltro;
      primera.datosTramita.chktag = rsPrimera.datos[0].chktag;
      primera.datosTramita.chkPlacas = rsPrimera.datos[0].chkPlacas;
      primera.datosTramita.estado = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.ESTADOS], rsPrimera.datos[0].estadoId);
      primera.datosTramita.comunaId = rsPrimera.datos[0].comunaID;
      primera.datosTramita.comuna = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.COMUNAS], rsPrimera.datos[0].comunaId);
      primera.datosTramita.oficinaId = rsPrimera.datos[0].oficinaID;
      primera.datosTramita.oficina = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.OFICINAS], rsPrimera.datos[0].oficinaId);
      primera.datosTramita.observacionId = rsPrimera.datos[0].observacionId;
      primera.datosTramita.observacion = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.OBSERVACIONES], rsPrimera.datos[0].observacionId);
      primera.datosTramita.numeroPlacas = tablasGenerales.cantidadPlacas;
      primera.datosTramita.valorPrimeraInscripcionId = rsPrimera.datos[0].valorPrimeraInscripcionId;
      primera.datosTramita.valorPrimeraInscripcion = fGenerales.setSelected(
        rsGenerales.datos[tablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "PRIMERA INSCRIPCION"),
        rsPrimera.datos[0].valorPrimeraInscripcionId
      );
      primera.datosTramita.valorTramita = fGenerales.setSelected(
        rsGenerales.datos[tablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "TRAMITA"),
        rsPrimera.datos[0].valorTramitaId
      );
      primera.datosTramita.valorServicioTag = fGenerales.setSelected(
        rsGenerales.datos[tablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "VALOR TAG"),
        rsPrimera.datos[0].valorServicioTagId
      );
      primera.datosTramita.valorNotaria = fGenerales.setSelected(
        rsGenerales.datos[tablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "NOTARIA"),
        rsPrimera.datos[0].valorNotariaId
      );
      primera.datosTramita.valorDespachoCorreo = fGenerales.setSelected(
        rsGenerales.datos[tablasGenerales.VALORESCOBRO].filter((TiposCobro) => TiposCobro["tipoCobro"] == "DESPACHO"),
        rsPrimera.datos[0].valorDespachoCorreoId
      );
      vehiculos.vehiculoId = rsPrimera.datos[0].vehiculoId;
      vehiculos.ppu = rsPrimera.datos[0].ppu;
      vehiculos.ppuDV = rsPrimera.datos[0].ppuDV;
      vehiculos.anoFabricracion = rsPrimera.datos[0].anoFabricracion;
      vehiculos.puertas = rsPrimera.datos[0].puertas;
      vehiculos.asientos = rsPrimera.datos[0].asientos;
      vehiculos.nroMotor = rsPrimera.datos[0].nroMotor;
      vehiculos.nroChasis = rsPrimera.datos[0].nroChasis;
      vehiculos.nroSerie = rsPrimera.datos[0].nroSerie;
      vehiculos.nroVin = rsPrimera.datos[0].nroVin;
      vehiculos.carga = rsPrimera.datos[0].carga;
      vehiculos.pesoBruto = rsPrimera.datos[0].pesoBruto;
      vehiculos.otraCarroceria = rsPrimera.datos[0].otraCarroceria;
      vehiculos.nroEjes = rsPrimera.datos[0].nroEjes;
      vehiculos.codigoCIT = rsPrimera.datos[0].codigoCIT;
      vehiculos.nroEjesDisponibles = rsPrimera.datos[0].nroEjesDisponibles;
      vehiculos.nroPlacas = rsPrimera.datos[0].nroPlacas;
      vehiculos.fechaInscripcion = rsPrimera.datos[0].fechaInscripcion;
      vehiculos.modeloId = rsPrimera.datos[0].modeloId;
      vehiculos.colorId = rsPrimera.datos[0].colorId;
      vehiculos.tipoVehiculoId = rsPrimera.datos[0].tipoVehiculoId;
      vehiculos.combustibleId = rsPrimera.datos[0].combustibleId;
      vehiculos.unidadCargaId = rsPrimera.datos[0].unidadCargaId;
      vehiculos.unidadPesoId = rsPrimera.datos[0].unidadPesoId;
      vehiculos.traccionId = rsPrimera.datos[0].traccionId;
      vehiculos.potenciaMotorId = rsPrimera.datos[0].potenciaMotorId;
      vehiculos.unidadPotenciaId = rsPrimera.datos[0].unidadPotenciaId;
      vehiculos.carroceriaId = rsPrimera.datos[0].carroceriaId;

      primera.datosVehiculo = vehiculos;

      let adquirente = adquirentes;
      let rsAdquirente = await dbDocumentosRecibidos.SEL_Adquirente(); // TODO: Crear SP y llamado a base de datos y contnnuar llenando datos faltantes

      //      primera.datosAdquirente = personaEmpresas;

      let rsDoctosRecibidos = await dbDocumentosRecibidos.SEL_DocumentosRecibidos(0);
      let rsDespachos = await dbDespachos.SEL_Despachos(0);

      primera.documentosRecibidos = rsDoctosRecibidos.datos.length > 0 ? rsDoctosRecibidos : documentosRecibidos;
      primera.despachos = rsDespachos.datos.length > 0 ? rsDoctosRecibidos : despachos;

      res.status(200).json(primera);
    }

    if (recordset.datos.length > 0) {
      let primera = Primera;
      primera.datosTramita.ppu = primeraSearch.PPU;
      res.status(200).json(primera);
      return res;
    }
  } catch (error) {
    console.log(error.json);
  }
};

module.exports = { getPrimeraInscripcion };
