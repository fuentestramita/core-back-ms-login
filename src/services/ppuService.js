const DB = require("../database/db");

const doPPU = async (PPU, numFactura, RUTDocumento) => {
  try {
    console.log("running ppu service");
    let dbResponse = await DB.getPPU(PPU, numFactura, RUTDocumento);
    if (dbResponse.length == 0) {
      return null;
    }
    console.log("BDD called");
    if (dbResponse.length > 0) {
      ppuRes = dbResponse[0];
    } else {
      ppuRes = dbResponse;
    }

    return ppuRes;
  } catch (error) {
    console.log("PPU error: " + error);
    return null;
  }
};

module.exports = { doPPU };
