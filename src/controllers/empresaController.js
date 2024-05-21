const Service = require("../services/ValidateService");
const empresa = require("../models/modelEmpresa");
const dbEmpresa = require("../database/EmpresasDB");

const getEmpresas = async (req, res) => {
  try {
    let rsDatos = await dbEmpresa.SEL_Empresas();
    console.log(rsDatos);

    // users.find(user => user.id == 1)

    if (rsDatos.datos.length != 0) {
      let empresa = rsDatos.datos;
      res.status(200).json(empresa);

      return res;
    }
  } catch (error) {
    console.log(error.json);
  }
};

module.exports = { getEmpresas };
