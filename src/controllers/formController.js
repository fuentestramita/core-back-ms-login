const Service = require("../services/FormService.js");

const doForm = async (req, res) => {
  let formValue = await Service.doForm();
  //Check if user actually exists
  if (formValue == null) {
    res.status(401).json({
      message: `No se encontraron resultados.`,
    });

    return res;
  }
  res.status(200);
  res.json(formValue);
  return res;
};

module.exports = { doForm };
