import data from "../src/database/database.json" assert { type: "json" };

const Usuarios = data.Usuarios;
console.log("utils: " + Usuarios);

module.exports = { Usuarios };
