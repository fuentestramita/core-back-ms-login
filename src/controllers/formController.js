const Service = require("../services/FormService.js");

const doForm = async (req, res) => {
  console.log("running form controller");
  const { campoID, nombreCampo, inputCampo } = req.body;
  console.dir(
    `controller:
    nombreCampo: ${nombreCampo} IDcampo: ${campoID} inputCampo: ${inputCampo}`
  );
  if (!nombreCampo)
    return res
      .status(400)
      .json({ message: `Es necesario el nombre del campo.` });
  let formValue = await Service.doForm(nombreCampo, campoID, inputCampo);
  //Check if user actually exists
  if (formValue == null) {
    res.status(401).json({
      message: `No se encontraron resultados.`,
    });

    return res;
  }
  console.log(formValue);
  res.status(200);
  res.json(formValue);
  return res;
};

module.exports = { doForm };
