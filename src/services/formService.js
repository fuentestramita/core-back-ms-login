const DB = require("../database/db");

const doForm = async () => {
  console.log("running form Service");
  try {
    let dbResponse = await DB.getForm();
    let formList;

    if (dbResponse.length == 0) {
      return null;
    }
    console.log("BDD called");
    //Response formatting
    formList = [
      {
        CalidadMeroTenedor: dbResponse[0].map((e) => {
          e.selected = 1;
          return e;
        }),
      },
      { Carrocerias: dbResponse[1] },
      { Ciudades: dbResponse[2] },
      { Colores: dbResponse[3] },
      { Combustibles: dbResponse[4] },
      { Comunas: dbResponse[5] },
      { Empresas: dbResponse[6] },
      { EstadosRegistro: dbResponse[7] },
      { Limitaciones: dbResponse[8] },
      { Marcas: dbResponse[9] },
      { Modelos: dbResponse[10] },
      { Monedas: dbResponse[11] },
      { NaturalezasDoctos: dbResponse[12] },
      { Notarios: dbResponse[13] },
      { Observaciones: dbResponse[14] },
      { ObservacionesCorreo: dbResponse[15] },
      { ObservacionesLimbo: dbResponse[16] },
      { PotenciaMotor: dbResponse[17] },
      { Propuestas: dbResponse[18] },
      { Regiones: dbResponse[19] },
      { TiposDocumentos: dbResponse[20] },
      { TiposVehiculos: dbResponse[21] },
      { TitulosMeraTenencia: dbResponse[22] },
      { Traccion: dbResponse[23] },
      { UnidadMedida: dbResponse[24] },
      { ValoresCobro: dbResponse[25] },
    ];
    // formList.forEach((e) => {
    //   console.dir("linea");
    //   console.dir(e);
    //   return;
    //   e.forEach((item) => {
    //     item["Selected"] = false;
    //   });
    // });
    // if (dbResponse.length > 0) {
    //   MenuList = dbResponse[0];
    // } else {
    //   MenuList = dbResponse;
    // }

    return formList;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { doForm };
