const Service = require("../services/ValidateService");
const Primera = require("../models/modelPrimeraInscripcion");

const getPrimeraInscripcion = async (req, res) => {
  const primeraSearch = {
    PPU: req.body.PPU,
    NUMFactura: req.body.NUMFactura,
    RUTFactura: req.body.RUTFactura,
  };

  let primera = Primera;
  primera.datosTramita.ppu = primeraSearch.PPU;
  (primera.datosTramita.estadoID = 3),
    (primera.datosTramita.estado = [
      {
        id: 1,
        descripcion: "INGRESADO",
        selected: 0,
      },
      {
        id: 2,
        descripcion: "RECIBIDO",
        selected: 0,
      },
      {
        id: 3,
        descripcion: "ACEPTADO",
        selected: 1,
      },
      {
        id: 4,
        descripcion: "RECHAZADO",
        selected: 0,
      },
    ]);

  (primera.datosVehiculo.vehiculoID = 3),
    (primera.datosVehiculo.vehiculo = [
      {
        id: 1,
        descripcion: "Kia",
        selected: 0,
      },
      {
        id: 2,
        descripcion: "mitsubishi",
        selected: 0,
      },
      {
        id: 3,
        descripcion: "Toyota",
        selected: 1,
      },
      {
        id: 4,
        descripcion: "Ford",
        selected: 0,
      },
    ]);

  (primera.datosTramita.comunaID = 3),
    (primera.datosTramita.comuna = [
      {
        id: 1,
        descripcion: "la Florida",
        selected: 0,
      },
      {
        id: 2,
        descripcion: "la Granja",
        selected: 0,
      },
      {
        id: 3,
        descripcion: "Puente Alto",
        selected: 1,
      },
      {
        id: 4,
        descripcion: "La Reina",
        selected: 0,
      },
    ]);

  primera.CalidadMeroTenedor = [
    {
      id: 1,
      descripcion: "ARRENDAMIENTO",
      selected: 0,
    },
    {
      id: 2,
      descripcion: "DEPOSITARIO",
      selected: 0,
    },
    {
      id: 3,
      descripcion: "COMODATARIO",
      selected: 1,
    },
    {
      id: 4,
      descripcion: "USUFRUCTUARIO",
      selected: 0,
    },
  ];

  try {
    console.log(primeraSearch.PPU);
    console.log(primeraSearch.NUMFactura);
    console.log(primeraSearch.RUTFactura);

    res.status(200).json(primera);
    return res;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPrimeraInscripcion };
