require("dotenv").config();
const { dir } = require("console");
const sql = require("mssql");
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
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
  authentication: {
    type: "default",
  },
  options: {
    encrypt: true, //for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
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
    let result1 = await pool
      .request()
      .query(`exec SEL_Login '${idLogin}', '${passLogin}'`);
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
    let result1 = await pool
      .request()
      .query(`Select * from dbo.Usuarios where RUTUsuario='${idLogin}'`);
    return result1.recordset;
  } catch (err) {
    return { error: err };
  }
};

const dbSetCodigo = async (id, codigo) => {
  try {
    let pool = await getConnection();
    let result1 = await pool
      .request()
      .query(`exec INS_CodigoLogin ${id}, '${codigo}'`);

    return result1.recordset;
  } catch (err) {
    return { error: err };
  }
};
const dbGetCodigo = async (id, codigo) => {
  try {
    let pool = await getConnection();
    let result1 = await pool
      .request()
      .query(`exec SEL_ValidaCodigoUsuario '${id}', '${codigo}'`);
    return result1.recordset;
  } catch (err) {
    return { error: err };
  }
};
module.exports = { dbLogin: dbLogin, dbSetCodigo, dbGetCodigo };
