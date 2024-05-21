const Service = require("../services/ValidateService");
const Primera = require("../models/modelPrimeraInscripcion");
const tablasGenerales = require("../models/modelGenerales");
const fGenerales = require("../controllers/generalesController");
const TipoCobro = require("../models/modelValoresCobro");
const personaEmpresas = require("../models/modelPersonasEmpresas");
const vehiculos = require("../models/modelVehiculo");
const documentosRecibidos = require("../models/modelDocumentosRecibidos");
const despachos = require("../models/modelDespachos");

const dbPrimera = require("../database/PrimeraInscripcionDB");
const dbDespachos = require("../database/DespachosDB");
const dbDocumentosRecibidos = require("../database/DocumentosRecibidosDB");

const getPrimeraInscripcion = async (req, res) => {
  try {
    const primeraSearch = {
      PPU: req.body.PPU,
      NUMFactura: req.body.NUMFactura,
      RUTFactura: req.body.RUTFactura,
    };

    let rsPrimera = await dbPrimera.SEL_PrimeraInscripcion(primeraSearch.PPU, primeraSearch.NUMFactura, primeraSearch.RUTFactura);
    let rsGenerales = await dbPrimera.SEL_ALL();

    // users.find(user => user.id == 1)

    if (rsPrimera.datos.length == 0) {
      let primera = Primera;
      primera.datosTramita.estado = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.ESTADOS], primera.datosTramita.estadoID);
      primera.datosTramita.comuna = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.COMUNAS], primera.datosTramita.comunaID);
      primera.datosTramita.oficina = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.OFICINAS], primera.datosTramita.oficinaID);
      primera.datosTramita.observacion = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.OBSERVACIONES], primera.datosTramita.observacionID);
      primera.datosTramita.numeroPlacas = tablasGenerales.cantidadPlacas;
      primera.datosTramita.valorPrimeraInscripcion = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.VALORESCOBRO]).filter((TiposCobro) => TiposCobro["TipoCobro"] == "PRIMERA INSCRIPCION");
      primera.datosTramita.valorTramita = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.VALORESCOBRO]).filter((TiposCobro) => TiposCobro["TipoCobro"] == "TRAMITA");
      primera.datosTramita.valorServicioTag = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.VALORESCOBRO]).filter((TiposCobro) => TiposCobro["TipoCobro"] == "VALOR TAG");
      primera.datosTramita.valorNotaria = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.VALORESCOBRO]).filter((TiposCobro) => TiposCobro["TipoCobro"] == "NOTARIA");
      primera.datosTramita.valorDespachoCorreo = fGenerales.setSelected(rsGenerales.datos[tablasGenerales.VALORESCOBRO]).filter((TiposCobro) => TiposCobro["TipoCobro"] == "DESPACHO");
      primera.datosVehiculo = vehiculos;
      primera.datosAdquirente = personaEmpresas;

      let rsDoctosRecibidos = await dbDocumentosRecibidos.SEL_DocumentosRecibidos(0);
      let rsDespachos = await dbDespachos.SEL_Despachos(0);

      primera.documentosRecibidos = rsDoctosRecibidos.datos.length > 0 ? rsDoctosRecibidos : documentosRecibidos;
      primera.despachos = rsDespachos.datos.length > 0 ? rsDoctosRecibidos : despachos;

      res.status(200).json(primera);

      return res;
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
