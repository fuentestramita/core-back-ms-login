const connectionString =
  "server=CHRIS\\SQLEXPRESS;Database=tramita-db;UID=CHRIS\\Chris;PWD=;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}";

const dbLogin = (idLogin, passLogin) => {
  return [
    {
      UsuarioID: 1,
      NombreUsuario: "Chris",
      RutUsuario: "19959357-9",
      Password: "12345",
    },
  ];

  // const foundUser = await dbVerify(idLogin);
  // if (foundUser.length == 0) {
  //   return null;
  // }
  // return new Promise((resolve, reject) => {
  //   try {
  //     sql.query(
  //       connectionString,
  //       `exec SEL_Login '${idLogin}', '${passLogin}'`,
  //       (err, rows) => {
  //         if (err != null) console.log(err);
  //         resolve(rows);
  //       }
  //     );
  //   } catch (error) {
  //     return reject(error);
  //   }
  // });
};

const dbVerify = async (idLogin) => {
  return new Promise((resolve, reject) => {
    try {
      sql.query(
        connectionString,
        `Select * from dbo.Usuarios where RUTUsuario='${idLogin}'`,
        (err, rows) => {
          if (err != null) console.log(err);
          resolve(rows);
        }
      );
    } catch (error) {
      return reject(error);
    }
  });
};

const dbSetCodigo = async (id, codigo) => {
  return new Promise((resolve, reject) => {
    try {
      sql.query(
        connectionString,
        `exec INS_CodigoLogin ${id}, '${codigo}'`,
        (err, rows) => {
          if (err != null) console.log(err);
          resolve(rows);
        }
      );
    } catch (error) {
      return reject(error);
    }
  });
};
const dbGetCodigo = async (id, codigo) => {
  return new Promise((resolve, reject) => {
    try {
      sql.query(
        connectionString,
        `exec SEL_ValidaCodigoUsuario '${id}', '${codigo}'`,
        (err, rows) => {
          if (err != null) console.log(err);
          resolve(rows);
        }
      );
    } catch (error) {
      return reject(error);
    }
  });
};
module.exports = { dbLogin: dbLogin, dbSetCodigo, dbGetCodigo };
