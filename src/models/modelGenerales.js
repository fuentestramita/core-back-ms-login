const Mensajes = {
  NOT_FOUND: {
    id: "REG_NOTFOUND",
    descripcion: "Registro no Encontrado",
  },
  REG_SAVED: {
    id: "REG_SAVED",
    descripcion: "Registro Grabado",
  },
  REG_DELETED: {
    id: "REG_DELETED",
    descripcion: "Registro Eliminado",
  },
  REG_FOUND: {
    id: "REG_FOUND",
    descripcion: "Registro Encontrado",
  },
};
const cantidadPlacas = [
  {
    id: 1,
    descripcion: "1",
    selected: false,
  },
  {
    id: 2,
    descripcion: "2",
    selected: 0,
  },
];

const TablasGenerales = {
  CALIDADMEROTENEDORES: 0,
  CARROCERIAS: 1,
  CIUDADES: 2,
  COLORES: 3,
  COMBUSTIBLES: 4,
  COMUNAS: 5,
  ESTADOS: 6,
  LIMITACIONES: 7,
  MARCAS: 8,
  MODELOS: 9,
  MONEDAS: 10,
  NATURALEZADOCUMENTOS: 11,
  NOTARIOS: 12,
  OBSERVACIONES: 13,
  OBSERVACIONESCORREO: 14,
  OBSERVACIONESLIMBO: 15,
  POTENCIAMOTOR: 16,
  REGIONES: 17,
  TIPODOCUMENTOS: 18,
  TIPOVEHICULOS: 19,
  TITULOSMERATENENCIA: 20,
  TRACCION: 21,
  UNIDADMEDIDA: 22,
  VALORESCOBRO: 23,
  OFICINAS: 24,
};

module.exports = { cantidadPlacas, Mensajes, TablasGenerales };
