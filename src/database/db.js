require("dotenv").config();
const { dir } = require("console");
const sql = require("mssql");
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const sqlConfig = {
  user: `${DB_USER}`,
  password: `${DB_PASS}`,
  database: `${DB_NAME}`,
  server: `${DB_HOST}`,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, //for azure
    trustServerCertificate: true,
    trustedConnection: true, // change to true for local dev / self-signed certs
  },
};

let poolRequest;

// returns a promise which resolves to the current connection pool
function getConnection() {
  if (!poolRequest) {
    try {
      const pool = new sql.ConnectionPool(sqlConfig);
      poolRequest = pool.connect();
    } catch (err) {
      return { error: err };
    }
  }
  return poolRequest;
}

const dbLogin = async (idLogin, passLogin) => {
  const foundUser = await dbVerify(idLogin);
  if (foundUser.length == 0) {
    return { error: "No hay usuarios con el rut " + idLogin };
  }
  try {
    let pool = await getConnection();
    let result1 = await pool.request().query(`exec SEL_Login '${idLogin}', '${passLogin}'`);
    if (result1.recordset.length == 0) {
      return {
        error: "La contraseña para el rut " + idLogin + " es incorrecta",
      };
    } else {
      return result1.recordset;
    }
  } catch (err) {
    return { error: err };
  }
};

const dbVerify = async (idLogin) => {
  try {
    let pool = await getConnection();
    let result1 = await pool.request().query(`Select * from dbo.Usuarios where RUTUsuario='${idLogin}'`);
    return result1.recordset;
  } catch (err) {
    return { error: err };
  }
};

const dbSetCodigo = async (id, codigo) => {
  try {
    let pool = await getConnection();
    let result1 = await pool.request().query(`exec INS_CodigoLogin ${id}, '${codigo}'`);

    return result1.recordset;
  } catch (err) {
    return { error: err };
  }
};

const dbGetCodigo = async (rut, codigo) => {
  try {
    let pool = await getConnection();
    console.dir(`exec SEL_ValidaCodigoUsuario '${rut}', '${codigo}'`);
    let result1 = await pool.request().query(`exec SEL_ValidaCodigoUsuario '${rut}', '${codigo}'`);
    console.dir("db:" + result1);
    return result1.recordset;
  } catch (err) {
    return { error: err };
  }
};

const getMenu = async (UsuarioID) => {
  try {
    let pool = await getConnection();
    let result1 = await pool.request().query(`exec SEL_MenuUsuario '${UsuarioID}'`);
    if (result1.recordset.length == 0) {
      return {
        error: "No se encontraron resultados.",
      };
    } else {
      return result1.recordset;
    }
  } catch (err) {
    return { error: err };
  }
};

const getForm = async () => {
  try {
    let pool = await getConnection();
    let result1 = await pool.request().query(`exec SEL_ALL`);

    if (result1.recordset.length == 0) {
      return {
        error: "No se encontraron resultados.",
      };
    } else {
      return result1.recordsets;
    }
  } catch (err) {
    return { error: err };
  }
};

// const getForm = async (nombreCampo, campoID, inputCampo) => {
//   try {
//     let pool = await getConnection();
//     let result1;

//     if (campoID) {
//       result1 = await pool
//         .request()
//         .query(`exec SEL_${nombreCampo} '${campoID}', '${inputCampo}'`);
//     } else {
//       result1 = await pool
//         .request()
//         .query(`exec SEL_${nombreCampo} '${inputCampo}'`);
//     }

//     if (result1.recordset.length == 0) {
//       return {
//         error: "No se encontraron resultados.",
//       };
//     } else {
//       return result1.recordset;
//     }
//   } catch (err) {
//     return { error: err };
//   }
// };

const getPPU = async (PPU, numFactura, RUTDocumento) => {
  try {
    let pool = await getConnection();
    let result1 = await pool.request().query(`exec SEL_PrimeraInscripcion '${PPU}', '${numFactura}', '${RUTDocumento}'`);
    if (result1.recordset.length == 0) {
      return {
        error: "No se encontraron resultados.",
      };
    }
    let result2 = await pool.request().query(`exec SEL_ALL`);
    if (result2.recordset.length == 0) {
      return {
        error: "No se encontraron resultados.",
      };
    }

    const result = {
      ppuValues: result1.recordset,
      formValues: result2.recordsets,
    };
    return result;
  } catch (err) {
    return { error: err };
  }
};

const dbGetUser = async (id) => {
  try {
    let pool = await getConnection();
    let result1 = await pool.request().query(`exec SEL_Usuario '${id}'`);
    return result1.recordset;
  } catch (err) {
    return { error: err };
  }
};

const passHash = async (password) => {
  bcrypt
    .hash(password, saltRounds) //recibe password y un int de rondas para generar el salt, la base para el hash
    .then((hash) => {
      console.log("Hash ", hash); //genera un hash usando el salt y la contraseña
      //Save hash to DB for x user
      validateUser(password, hash); //comprobar que el hash se hizo correctamente
    })
    .catch((err) => console.error(err.message));
};

function validateUser(password, hash) {
  //reemplazar la validacion de contraseña del dbValidate con esta función
  bcrypt
    .compare(password, hash)
    .then((res) => {
      console.log(res); // return true
    })
    .catch((err) => console.error(err.message));
}

module.exports = {
  getConnection,
  dbLogin: dbLogin,
  dbSetCodigo,
  dbGetCodigo,
  getForm: getForm,
  getMenu: getMenu,
  getPPU: getPPU,
  dbGetUser,
};
