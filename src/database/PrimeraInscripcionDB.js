const DB = require("./db.js");
var sql = require("mssql");

const SEL_PrimeraInscripcion = async (primeraSearch) => {
  try {
    let pool = await DB.getConnection();
    let result1 = await pool.request().query(`exec SEL_PrimeraInscripcion ${primeraSearch.clienteID},${primeraSearch.primeraInscripcionID}, '${primeraSearch.PPU}', '${primeraSearch.NUMFactura}', '${primeraSearch.RUTFactura}'`);

    const result = { datos: result1.recordset };
    return result;
  } catch (err) {
    return { error: err };
  }
};

const SEL_ALL = async () => {
  try {
    let pool = await DB.getConnection();
    let result1 = await pool.request().query("exec SEL_ALL");

    const result = { datos: result1.recordsets };
    return result;
  } catch (err) {
    return { error: err };
  }
};

const INS_PrimeraInscripcion = async (primera) => {
  try {
    let pool = await DB.getConnection();
    let result1 = await pool
      .request()
      .input("primeraInscripcionId", primera.datosTramita.primeraInscripcionID)
      .input("empresaId", primera.datosTramita.empresaID)
      .input("ppu", primera.datosTramita.ppu)
      .input("numeroOperacion", primera.datosTramita.numeroOperacion)
      .input("origen", primera.datosTramita.origen)
      .input("numeroFactura", primera.datosTramita.numeroFactura)
      .input("rutCliente", primera.datosTramita.rutCliente)
      .input("vencimientoContratoLeasing", primera.datosTramita.vencimientoContratoLeasing)
      .input("rutRepresentanteLegal", primera.datosTramita.rutRepresentanteLegal)
      .input("contacto", primera.datosTramita.contacto)
      .input("telefonoContacto", primera.datosTramita.telefonoContacto)
      .input("emailContacto", primera.datosTramita.emailContacto)
      .input("numeroSolicitud", primera.datosTramita.numeroSolicitud)
      .input("estaEntregado", primera.datosTramita.estaEntregado)
      .input("fechaSolicitudRnvm", primera.datosTramita.fechaSolicitudRNVM)
      .input("numeroValija", primera.datosTramita.numeroValija)
      .input("ejecutivo", primera.datosTramita.ejecutivo)
      .input("sucursal", primera.datosTramita.sucursal)
      .input("fechaRecepcionBanco", primera.datosTramita.fechaRecepcionBanco)
      .input("fechaPadron", primera.datosTramita.fechaPadron)
      .input("codigoDespachoCorreo", primera.datosTramita.codigoDespachoCorreo)
      .input("numeroPlacas", primera.datosTramita.numeroPlacas)
      .input("fechaIngresoRnvm", primera.datosTramita.numeroPlacas)
      .input("observaciones", primera.datosTramita.observaciones)
      .input("correlativoEntrega", primera.datosTramita.correlativoEntrega)
      .input("folio", primera.datosTramita.folio)
      .input("fechaIngresoTag", primera.datosTramita.fechaIngresoTAG)
      .input("f88", primera.datosTramita.f88)
      .input("valorF88", primera.datosTramita.valorF88)
      .input("flCertCum5594", primera.datosTramita.flCertCum5594)
      .input("fotocopiaRutBanco", primera.datosTramita.fotocopiaRutBanco)
      .input("certificadoDs5594", primera.datosTramita.certificadoDS5594)
      .input("chk1U", primera.datosTramita.chk1U)
      .input("chk2U", primera.datosTramita.chk2U)
      .input("chk3U", primera.datosTramita.chk3U)
      .input("chk4U", primera.datosTramita.chk4U)
      .input("solicitudPrimeraInscripcion", primera.datosTramita.solicitudPrimeraInscripcion)
      .input("certificadoLeasing", primera.datosTramita.certificadoLeasing)
      .input("certificadoCombustibles", primera.datosTramita.certificadoCombustibles)
      .input("contratoTelevia", primera.datosTramita.contratoTelevia)
      .input("convenioPac", primera.datosTramita.convenioPAC)
      .input("dispositivoTelevia", primera.datosTramita.dispositivoTelevia)
      .input("contratoLeasing", primera.datosTramita.contratoLeasing)
      .input("padron", primera.datosTramita.padron)
      .input("pendienteContrato", primera.datosTramita.pendienteContrato)
      .input("pendienteAnotacionMeraTenencia", primera.datosTramita.pendienteAnotacionMeraTenencia)
      .input("despachoExterno", primera.datosTramita.despachoExterno)
      .input("informativoSeguro", primera.datosTramita.informativoSeguro)
      .input("fechaCreacion", primera.datosTramita.fechaCreacion)
      .input("fechaActualizacion", primera.datosTramita.fechaActualizacion)
      .input("vehiculoId", primera.datosVehiculo.vehiculoID)
      .input("comunaId", primera.datosTramita.comunaID)
      .input("estadoId", primera.datosTramita.estadoID)
      .input("observacionId", primera.datosTramita.observacionID)
      .input("clienteId", primera.datosTramita.clienteID)
      .input("usuarioId", primera.datosTramita.usuarioID)
      .input("adquirenteId", primera.datosAdquirente.adquirenteID)
      .input("valorPrimeraInscripcionId", primera.datosTramita.valorPrimeraInscripcionID)
      .input("valorTramitaId", primera.datosTramita.valorTramitaID)
      .input("valorServicioTagId", primera.datosTramita.valorServicioTagID)
      .input("valorNotariaId", primera.datosTramita.valorNotariaID)
      .input("valorDespachoCorreoId", primera.datosTramita.valorDespachoCorreoID)
      .input("oficinaId", primera.datosTramita.oficinaID)
      .input("anoProceso", primera.datosTramita.anoProceso)
      .input("anoFiltro", primera.datosTramita.anoFiltro)
      .input("chkTag", primera.datosTramita.chktag)
      .input("chkPlacas", primera.datosTramita.chkPlacas)

      .execute("INS_PrimeraInscripcion");

    const result = { datos: result1.recordsets };
    return result;
  } catch (err) {
    return { error: err };
  }
};

module.exports = { SEL_PrimeraInscripcion, SEL_ALL, INS_PrimeraInscripcion };
