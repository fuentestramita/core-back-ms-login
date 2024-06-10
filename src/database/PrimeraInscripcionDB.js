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
      .input("primeraInscripcionId", primera.datosTramita.primeraInscripcionId)
      .input("empresaId", primera.datosTramita.empresaId)
      .input("ppu", primera.datosTramita.ppu)
      .input("numeroOperacion", primera.datosTramita.numeroOperacion)
      .input("origen", primera.datosTramita.origen)
      .input("numeroFactura", primera.datosTramita.numeroFactura)
      .input("rutCliente", primera.datosTramita.rutCliente)
      .input("vencimientoContratoLeasing", primera.datosTramita.vencimientoContratoLeasing)
      .input("RepresentanteLegalID", primera.datosTramita.representanteLegalId)
      .input("contacto", primera.datosTramita.contacto)
      .input("telefonoContacto", primera.datosTramita.telefonoContacto)
      .input("emailContacto", primera.datosTramita.emailContacto)
      .input("numeroSolicitud", primera.datosTramita.numeroSolicitud)
      .input("estaEntregado", primera.datosTramita.estaEntregado)
      .input("fechaSolicitudRnvm", primera.datosTramita.fechaSolicitudRnvm)
      .input("numeroValija", primera.datosTramita.numeroValija)
      .input("ejecutivo", primera.datosTramita.ejecutivo)
      .input("sucursal", primera.datosTramita.sucursal)
      .input("fechaRecepcionBanco", primera.datosTramita.fechaRecepcionBanco)
      .input("fechaPadron", primera.datosTramita.fechaPadron)
      .input("codigoDespachoCorreo", primera.datosTramita.codigoDespachoCorreo)
      .input("numeroPlacas", primera.datosTramita.numeroPlacas)
      .input("fechaIngresoRnvm", primera.datosTramita.fechaIngresoRnvm)
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
      .input("vehiculoId", primera.datosVehiculo.vehiculoId)
      .input("comunaId", primera.datosTramita.comunaId)
      .input("estadoId", primera.datosTramita.estadoId)
      .input("observacionId", primera.datosTramita.observacionId)
      .input("clienteId", primera.datosTramita.clienteId)
      .input("usuarioId", primera.datosTramita.usuarioId)
      .input("adquirenteId", primera.datosAdquirente.personaEmpresaID)
      .input("valorPrimeraInscripcionId", primera.datosTramita.valorPrimeraInscripcionId)
      .input("valorTramitaId", primera.datosTramita.valorTramitaId)
      .input("valorServicioTagId", primera.datosTramita.valorServicioTagId)
      .input("valorNotariaId", primera.datosTramita.valorNotariaId)
      .input("valorDespachoCorreoId", primera.datosTramita.valorDespachoCorreoId)
      .input("oficinaId", primera.datosTramita.oficinaId)
      .input("anoProceso", primera.datosTramita.anoProceso)
      .input("anoFiltro", primera.datosTramita.anoFiltro)
      .input("chkTag", primera.datosTramita.chktag)
      .input("chkPlacas", primera.datosTramita.chkPlacas)
      .execute("INS_PrimeraInscripcion")
      .then((result1) => {
        return result1;
      })
      .catch((err) => {
        console.log(`Error executing sp ${err}`);
      });
    return { datos: result1.recordsets };
  } catch (err) {
    console.log(`Error ${err.stack}`); //TODO insertar el error en la tabla logErrores
    return { error: err };
  }
};

module.exports = { SEL_PrimeraInscripcion, SEL_ALL, INS_PrimeraInscripcion };
