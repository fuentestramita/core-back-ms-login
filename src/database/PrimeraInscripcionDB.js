const { Console } = require("console");
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
    // let pool = await DB.getConnection();
    // let result1 = await pool
    //   .request()
    //   .input("empresaId", primera.datosTramita.empresaId)
    //   .input("usuarioId", primera.datosTramita.usuarioId)
    //   .input("primeraInscripcionId", primera.datosTramita.primeraInscripcionId)
    //   .input("ppu", primera.datosTramita.ppu)
    //   .input("numeroOperacion", primera.datosTramita.numeroOperacion)
    //   .input("origen", primera.datosTramita.origen)
    //   .input("numeroFactura", primera.datosTramita.numeroFactura)
    //   .input("rutCliente", primera.datosTramita.rutCliente)
    //   .input("vencimientoContratoLeasing", primera.datosTramita.vencimientoContratoLeasing)
    //   .input("RepresentanteLegalID", primera.datosTramita.representanteLegalId)
    //   .input("contacto", primera.datosTramita.contacto)
    //   .input("telefonoContacto", primera.datosTramita.telefonoContacto)
    //   .input("emailContacto", primera.datosTramita.emailContacto)
    //   .input("numeroSolicitud", primera.datosTramita.numeroSolicitud)
    //   .input("estaEntregado", primera.datosTramita.estaEntregado)
    //   .input("fechaSolicitudRnvm", primera.datosTramita.fechaSolicitudRnvm)
    //   .input("numeroValija", primera.datosTramita.numeroValija)
    //   .input("ejecutivo", primera.datosTramita.ejecutivo)
    //   .input("sucursal", primera.datosTramita.sucursal)
    //   .input("fechaRecepcionBanco", primera.datosTramita.fechaRecepcionBanco)
    //   .input("fechaPadron", primera.datosTramita.fechaPadron)
    //   .input("codigoDespachoCorreo", primera.datosTramita.codigoDespachoCorreo)
    //   .input("numeroPlacas", primera.datosTramita.numeroPlacas)
    //   .input("fechaIngresoRnvm", primera.datosTramita.fechaIngresoRnvm)
    //   .input("observaciones", primera.datosTramita.observaciones)
    //   .input("correlativoEntrega", primera.datosTramita.correlativoEntrega)
    //   .input("folio", primera.datosTramita.folio)
    //   .input("fechaIngresoTag", primera.datosTramita.fechaIngresoTAG)
    //   .input("f88", primera.datosTramita.f88)
    //   .input("valorF88", primera.datosTramita.valorF88)
    //   .input("flCertCum5594", primera.datosTramita.flCertCum5594)
    //   .input("fotocopiaRutBanco", primera.datosTramita.fotocopiaRutBanco)
    //   .input("certificadoDs5594", primera.datosTramita.certificadoDS5594)
    //   .input("chk1U", primera.datosTramita.chk1U)
    //   .input("chk2U", primera.datosTramita.chk2U)
    //   .input("chk3U", primera.datosTramita.chk3U)
    //   .input("chk4U", primera.datosTramita.chk4U)
    //   .input("solicitudPrimeraInscripcion", primera.datosTramita.solicitudPrimeraInscripcion)
    //   .input("certificadoLeasing", primera.datosTramita.certificadoLeasing)
    //   .input("certificadoCombustibles", primera.datosTramita.certificadoCombustibles)
    //   .input("contratoTelevia", primera.datosTramita.contratoTelevia)
    //   .input("convenioPac", primera.datosTramita.convenioPAC)
    //   .input("dispositivoTelevia", primera.datosTramita.dispositivoTelevia)
    //   .input("contratoLeasing", primera.datosTramita.contratoLeasing)
    //   .input("padron", primera.datosTramita.padron)
    //   .input("pendienteContrato", primera.datosTramita.pendienteContrato)
    //   .input("pendienteAnotacionMeraTenencia", primera.datosTramita.pendienteAnotacionMeraTenencia)
    //   .input("despachoExterno", primera.datosTramita.despachoExterno)
    //   .input("informativoSeguro", primera.datosTramita.informativoSeguro)
    //   .input("fechaCreacion", primera.datosTramita.fechaCreacion)
    //   .input("fechaActualizacion", primera.datosTramita.fechaActualizacion)
    //   .input("vehiculoId", primera.datosVehiculo.vehiculoId)
    //   .input("comunaId", primera.datosTramita.comunaId)
    //   .input("estadoId", primera.datosTramita.estadoId)
    //   .input("observacionId", primera.datosTramita.observacionId)
    //   .input("clienteId", primera.datosTramita.clienteId)
    //   .input("adquirenteId", primera.datosAdquirente.personaEmpresaID)
    //   .input("valorPrimeraInscripcionId", primera.datosTramita.valorPrimeraInscripcionId)
    //   .input("valorTramitaId", primera.datosTramita.valorTramitaId)
    //   .input("valorServicioTagId", primera.datosTramita.valorServicioTagId)
    //   .input("valorNotariaId", primera.datosTramita.valorNotariaId)
    //   .input("valorDespachoCorreoId", primera.datosTramita.valorDespachoCorreoId)
    //   .input("oficinaId", primera.datosTramita.oficinaId)
    //   .input("anoProceso", primera.datosTramita.anoProceso)
    //   .input("anoFiltro", primera.datosTramita.anoFiltro)
    //   .input("chkTag", primera.datosTramita.chktag)
    //   .input("chkPlacas", primera.datosTramita.chkPlacas)
    // let result1 = await request.execute("INS_PrimeraInscripcion")
    //   .then((result1) => {

    //     return result1;
    //   })
    //   .catch((err) => {
    //     console.log(`Error executing sp ${err}`);
    //   });

    let pool = await DB.createConnection();
    const dbRequest = await pool.request();
    await DB.addParameter(dbRequest, "empresaId", sql.TYPES.Numeric, primera.datosTramita.empresaId);
    await DB.addParameter(dbRequest, "primeraInscripcionId", sql.TYPES.Numeric, primera.datosTramita.primeraInscripcionId);
    await DB.addParameter(dbRequest, "ppu", sql.TYPES.VarChar, primera.datosTramita.ppu);
    await DB.addParameter(dbRequest, "numeroOperacion", sql.TYPES.VarChar, primera.datosTramita.numeroOperacion);
    await DB.addParameter(dbRequest, "origen", sql.TYPES.VarChar, primera.datosTramita.origen);
    await DB.addParameter(dbRequest, "numeroFactura", sql.TYPES.VarChar, primera.datosTramita.numeroFactura);
    await DB.addParameter(dbRequest, "rutCliente", sql.TYPES.VarChar, primera.datosTramita.rutCliente);
    await DB.addParameter(dbRequest, "vencimientoContratoLeasing", sql.TYPES.VarChar, primera.datosTramita.vencimientoContratoLeasing);
    await DB.addParameter(dbRequest, "RepresentanteLegalID", sql.TYPES.Numeric, primera.datosTramita.representanteLegalId);
    await DB.addParameter(dbRequest, "contacto", sql.TYPES.VarChar, primera.datosTramita.contacto);
    await DB.addParameter(dbRequest, "telefonoContacto", sql.TYPES.VarChar, primera.datosTramita.telefonoContacto);
    await DB.addParameter(dbRequest, "emailContacto", sql.TYPES.VarChar, primera.datosTramita.emailContacto);
    await DB.addParameter(dbRequest, "numeroSolicitud", sql.TYPES.VarChar, primera.datosTramita.numeroSolicitud);
    await DB.addParameter(dbRequest, "estaEntregado", sql.TYPES.Bit, primera.datosTramita.estaEntregado);
    await DB.addParameter(dbRequest, "fechaSolicitudRnvm", sql.TYPES.VarChar, primera.datosTramita.fechaSolicitudRnvm);
    await DB.addParameter(dbRequest, "numeroValija", sql.TYPES.VarChar, primera.datosTramita.numeroValija);
    await DB.addParameter(dbRequest, "ejecutivo", sql.TYPES.VarChar, primera.datosTramita.ejecutivo);
    await DB.addParameter(dbRequest, "sucursal", sql.TYPES.VarChar, primera.datosTramita.sucursal);
    await DB.addParameter(dbRequest, "fechaRecepcionBanco", sql.TYPES.VarChar, primera.datosTramita.fechaRecepcionBanco);
    await DB.addParameter(dbRequest, "fechaPadron", sql.TYPES.VarChar, primera.datosTramita.fechaPadron);
    await DB.addParameter(dbRequest, "codigoDespachoCorreo", sql.TYPES.VarChar, primera.datosTramita.codigoDespachoCorreo);
    await DB.addParameter(dbRequest, "numeroPlacas", sql.TYPES.Numeric, primera.datosTramita.numeroPlacas);
    await DB.addParameter(dbRequest, "fechaIngresoRnvm", sql.TYPES.VarChar, primera.datosTramita.fechaIngresoRnvm);
    await DB.addParameter(dbRequest, "observaciones", sql.TYPES.VarChar, primera.datosTramita.observaciones);
    await DB.addParameter(dbRequest, "correlativoEntrega", sql.TYPES.VarChar, primera.datosTramita.correlativoEntrega);
    await DB.addParameter(dbRequest, "folio", sql.TYPES.VarChar, primera.datosTramita.folio);
    await DB.addParameter(dbRequest, "fechaIngresoTag", sql.TYPES.VarChar, primera.datosTramita.fechaIngresoTAG);
    await DB.addParameter(dbRequest, "f88", sql.TYPES.Bit, primera.datosTramita.f88);
    await DB.addParameter(dbRequest, "valorF88", sql.TYPES.Numeric, primera.datosTramita.valorF88);
    await DB.addParameter(dbRequest, "flCertCum5594", sql.TYPES.Bit, primera.datosTramita.flCertCum5594);
    await DB.addParameter(dbRequest, "fotocopiaRutBanco", sql.TYPES.Bit, primera.datosTramita.fotocopiaRutBanco);
    await DB.addParameter(dbRequest, "certificadoDs5594", sql.TYPES.Bit, primera.datosTramita.certificadoDS5594);
    await DB.addParameter(dbRequest, "chk1U", sql.TYPES.Bit, primera.datosTramita.chk1U);
    await DB.addParameter(dbRequest, "chk2U", sql.TYPES.Bit, primera.datosTramita.chk2U);
    await DB.addParameter(dbRequest, "chk3U", sql.TYPES.Bit, primera.datosTramita.chk3U);
    await DB.addParameter(dbRequest, "chk4U", sql.TYPES.Bit, primera.datosTramita.chk4U);
    await DB.addParameter(dbRequest, "solicitudPrimeraInscripcion", sql.TYPES.Bit, primera.datosTramita.solicitudPrimeraInscripcion);
    await DB.addParameter(dbRequest, "certificadoLeasing", sql.TYPES.Bit, primera.datosTramita.certificadoLeasing);
    await DB.addParameter(dbRequest, "certificadoCombustibles", sql.TYPES.Bit, primera.datosTramita.certificadoCombustibles);
    await DB.addParameter(dbRequest, "contratoTelevia", sql.TYPES.Bit, primera.datosTramita.contratoTelevia);
    await DB.addParameter(dbRequest, "convenioPac", sql.TYPES.Bit, primera.datosTramita.convenioPAC);
    await DB.addParameter(dbRequest, "dispositivoTelevia", sql.TYPES.Bit, primera.datosTramita.dispositivoTelevia);
    await DB.addParameter(dbRequest, "contratoLeasing", sql.TYPES.Bit, primera.datosTramita.contratoLeasing);
    await DB.addParameter(dbRequest, "padron", sql.TYPES.Bit, primera.datosTramita.padron);
    await DB.addParameter(dbRequest, "pendienteContrato", sql.TYPES.Bit, primera.datosTramita.pendienteContrato);
    await DB.addParameter(dbRequest, "pendienteAnotacionMeraTenencia", sql.TYPES.Bit, primera.datosTramita.pendienteAnotacionMeraTenencia);
    await DB.addParameter(dbRequest, "despachoExterno", sql.TYPES.Bit, primera.datosTramita.despachoExterno);
    await DB.addParameter(dbRequest, "informativoSeguro", sql.TYPES.Bit, primera.datosTramita.informativoSeguro);
    await DB.addParameter(dbRequest, "fechaCreacion", sql.TYPES.VarChar, primera.datosTramita.fechaCreacion);
    await DB.addParameter(dbRequest, "fechaActualizacion", sql.TYPES.VarChar, primera.datosTramita.fechaActualizacion);
    await DB.addParameter(dbRequest, "vehiculoId", sql.TYPES.Numeric, primera.datosVehiculo.vehiculoId);
    await DB.addParameter(dbRequest, "comunaId", sql.TYPES.Numeric, primera.datosTramita.comunaId);
    await DB.addParameter(dbRequest, "estadoId", sql.TYPES.Numeric, primera.datosTramita.estadoId);
    await DB.addParameter(dbRequest, "observacionId", sql.TYPES.Numeric, primera.datosTramita.observacionId);
    await DB.addParameter(dbRequest, "clienteId", sql.TYPES.Numeric, primera.datosTramita.clienteId);
    await DB.addParameter(dbRequest, "usuarioId", sql.TYPES.Numeric, primera.datosTramita.usuarioId);
    await DB.addParameter(dbRequest, "adquirenteId", sql.TYPES.Numeric, primera.datosAdquirente.personaEmpresaID);
    await DB.addParameter(dbRequest, "valorPrimeraInscripcionId", sql.TYPES.Numeric, primera.datosTramita.valorPrimeraInscripcionId);
    await DB.addParameter(dbRequest, "valorTramitaId", sql.TYPES.Numeric, primera.datosTramita.valorTramitaId);
    await DB.addParameter(dbRequest, "valorServicioTagId", sql.TYPES.Numeric, primera.datosTramita.valorServicioTagId);
    await DB.addParameter(dbRequest, "valorNotariaId", sql.TYPES.Numeric, primera.datosTramita.valorNotariaId);
    await DB.addParameter(dbRequest, "valorDespachoCorreoId", sql.TYPES.Numeric, primera.datosTramita.valorDespachoCorreoId);
    await DB.addParameter(dbRequest, "oficinaId", sql.TYPES.Numeric, primera.datosTramita.oficinaId);
    await DB.addParameter(dbRequest, "anoProceso", sql.TYPES.Numeric, primera.datosTramita.anoProceso);
    await DB.addParameter(dbRequest, "anoFiltro", sql.TYPES.Numeric, primera.datosTramita.anoFiltro);
    await DB.addParameter(dbRequest, "chkTag", sql.TYPES.Bit, primera.datosTramita.chktag);
    await DB.addParameter(dbRequest, "chkPlacas", sql.TYPES.Bit, primera.datosTramita.chkPlacas);
    let rsRetorno = await DB.executeSP(dbRequest, "INS_PrimeraInscripcion");

    return { datos: rsRetorno.recordsets };
  } catch (err) {
    console.log(`Error ${err.stack}`); //TODO insertar el error en la tabla logErrores
    return { error: err };
  }
};

module.exports = { SEL_PrimeraInscripcion, SEL_ALL, INS_PrimeraInscripcion };
