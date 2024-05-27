var sql = require("mssql");

const MenuSchema = [
  {
    id: (sql.TYPES.Numeric, ""),
    name: (sql.TYPES.VarChar, ""),
    route: (sql.TYPES.VarChar, ""),
    subMenu: [
      {
        id: (sql.TYPES.Numeric, ""),
        name: (sql.TYPES.VarChar, ""),
        route: (sql.TYPES.VarChar, ""),
      },
    ],
  },
];

module.exports = { MenuSchema };
