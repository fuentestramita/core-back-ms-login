const DB = require("../database/db");

const doPPU = async (PPU, numFactura, RUTDocumento) => {
  try {
    console.log("running ppu service");
    let dbResponse = await DB.getPPU(PPU, numFactura, RUTDocumento);
    if (dbResponse.length == 0) {
      return null;
    }
    ppuValues = dbResponse.ppuValues[0];
    formValues = dbResponse.formValues;

    //Response formatting
    formList = [
      { PrimeraInscripcionID: ppuValues.PrimeraInscripcionID },
      { PPU: ppuValues.PPU },
      { NumeroOperacion: ppuValues.NumeroOperacion },
      { NumeroFactura: ppuValues.NumeroFactura },
      { Origen: ppuValues.Origen },
      { RutCliente: ppuValues.RutCliente },a
      { RutRepresentanteLegal: ppuValues.RutRepresentanteLegal },
      { Contacto: ppuValues.Contacto },
      { TelefonoContacto: ppuValues.TelefonoContacto },
      { EmailContacto: ppuValues.EmailContacto },
      { NumeroSolicitud: ppuValues.NumeroSolicitud },
      { NumeroValija: ppuValues.NumeroValija },
      { EstaEntregado: ppuValues.EstaEntregado },
      { Ejecutivo: ppuValues.Ejecutivo },
      { Sucursal: ppuValues.Sucursal },
      { CodigoDespachoCorreo: ppuValues.CodigoDespachoCorreo },
      { NumeroPlacas: ppuValues.NumeroPlacas }, //esta en la sección de vehiculos
      { Observacion: ppuValues.Observacion },
      { CorrelativoEntrega: ppuValues.CorrelativoEntrega },
      { Folio: ppuValues.Folio },
      { F88: ppuValues.F88 },
      { ValorF88: ppuValues.ValorF88 },
      { FLCertCum5594: ppuValues.FLCertCum5594 },
      { FotocopiaRutBanco: ppuValues.FotocopiaRutBanco },
      { CertificadoDS5594: ppuValues.CertificadoDS5594 },
      { U1: ppuValues.U1 },
      { U2: ppuValues.U2 },
      { U3: ppuValues.U3 },
      { U4: ppuValues.U4 },
      { SolicitudPrimeraInscripcion: ppuValues.SolicitudPrimeraInscripcion },
      { CertificadoLeasing: ppuValues.CertificadoLeasing },
      { CertificadoCombustibles: ppuValues.CertificadoCombustibles },
      { ContratoTelevia: ppuValues.ContratoTelevia },
      { DispositivoTelevia: ppuValues.DispositivoTelevia },
      { ConvenioPAC: ppuValues.ConvenioPAC },
      { ContratoLeasing: ppuValues.ContratoLeasing },
      { Padron: ppuValues.Padron },
      { PendienteContrato: ppuValues.PendienteContrato },
      {
        PendienteAnotacionMeraTenencia:
          ppuValues.PendienteAnotacionMeraTenencia,
      },
      { DespachoExterno: ppuValues.DespachoExterno },
      { InformativoSeguro: ppuValues.InformativoSeguro },
      { ValorNeto: ppuValues.ValorNeto },
      { ValorIVAFactura: ppuValues.ValorIVAFactura },
      { ValorTotalFactura: ppuValues.ValorTotalFactura },
      { NumeroOperacion: ppuValues.NumeroOperacion },

      //Fechas
      { FechaCreacion: ppuValues.FechaCreacion },
      { FechaActualizacion: ppuValues.FechaActualizacion },
      { VencimientoContratoLeasing: ppuValues.VencimientoContratoLeasing },
      { FechaSolicitudRNVM: ppuValues.FechaSolicitudRNVM },
      { FechaRecepcionBanco: ppuValues.FechaRecepcionBanco },
      { FechaPadron: ppuValues.FechaPadron },
      { FechaIngresoRNVM: ppuValues.FechaIngresoRNVM },
      { FechaIngresoTAG: ppuValues.FechaIngresoTAG },
      { FechaInscripcion: ppuValues.FechaInscripcion },

      //Select
      {
        CalidadMeroTenedor: formValues[0].map((e) => {
          if (ppuValues.CalidadMeroTenedorID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Carrocerias: formValues[1].map((e) => {
          if (ppuValues.CarroceriaID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Ciudades: formValues[2].map((e) => {
          if (ppuValues.CiudadID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Colores: formValues[3].map((e) => {
          if (ppuValues.ColorID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Combustibles: formValues[4].map((e) => {
          if (ppuValues.CombustibleID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Comunas: formValues[5].map((e) => {
          if (ppuValues.ComunaID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Empresas: formValues[6].map((e) => {
          if (ppuValues.EmpresaID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        EstadosRegistro: formValues[7].map((e) => {
          if (ppuValues.EstadoID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Limitaciones: formValues[8].map((e) => {
          if (ppuValues.LimitacionID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Marcas: formValues[9].map((e) => {
          if (ppuValues.MarcaID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Modelos: formValues[10].map((e) => {
          if (ppuValues.ModelosID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Monedas: formValues[11].map((e) => {
          if (ppuValues.MonedaID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        NaturalezasDoctos: formValues[12].map((e) => {
          if (ppuValues.NaturalezasDoctoID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Notarios: formValues[13].map((e) => {
          if (ppuValues.NotarioID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Observaciones: formValues[14].map((e) => {
          if (ppuValues.ObservacionID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        ObservacionesCorreo: formValues[15].map((e) => {
          if (ppuValues.ObservacionCorreoID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        ObservacionesLimbo: formValues[16].map((e) => {
          if (ppuValues.ObservacionesLimboID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        PotenciaMotor: formValues[17].map((e) => {
          if (ppuValues.PotenciaMotorID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      { Propuestas: formValues[18] },
      {
        Regiones: formValues[19].map((e) => {
          if (ppuValues.RegionID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        TiposDocumentos: formValues[20].map((e) => {
          if (ppuValues.TiposDocumentoID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        TiposVehiculos: formValues[21].map((e) => {
          if (ppuValues.VehiculoID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        TitulosMeraTenencia: formValues[22].map((e) => {
          if (ppuValues.TituloMeraTenenciaID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        Traccion: formValues[23].map((e) => {
          if (ppuValues.TraccionID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        unidadCarga: formValues[24].map((e) => {
          if (ppuValues.UnidadCargaID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        UnidadPotencia: formValues[24].map((e) => {
          if (ppuValues.UnidadPotenciaID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      {
        UnidadPeso: formValues[24].map((e) => {
          if (ppuValues.UnidadPesoID == e.ID) {
            e.selected = true;
          } else {
            e.selected = false;
          }
          return e;
        }),
      },
      { ValoresCobro: formValues[25] },
      {
        PPU: ppuValues,
      },
    ];
    return formList;
    formList.forEach((e) => {
      console.dir(e);
    });

    return;
    if (dbResponse.length > 0) {
      ppuRes = dbResponse;
    } else {
      ppuRes = dbResponse;
    }

    return ppuRes;
  } catch (error) {
    console.log("PPU error: " + error);
    return null;
  }
};

module.exports = { doPPU };
