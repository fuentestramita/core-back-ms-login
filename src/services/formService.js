const DB = require("../database/db");

const doForm = async (campoID, nombreCampo, inputCampo) => {
  try {
    console.log("running form service");
    console.dir(
      `service:
      nombreCampo: ${nombreCampo} IDcampo: ${campoID} inputCampo: ${inputCampo}`
    );
    let dbResponse = await DB.getForm(campoID, nombreCampo, inputCampo);
    let formList;
    if (dbResponse.length == 0) {
      return null;
    }
    console.log("BDD called");
    formList = dbResponse;
    // if (dbResponse.length > 0) {
    //   MenuList = dbResponse[0];
    // } else {
    //   MenuList = dbResponse;
    // }

    return formList;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { doForm };
