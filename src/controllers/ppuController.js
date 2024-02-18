const Service = require("../services/ppuService.js");

const doPPU = async (req, res) => {
  console.log("running ppu controller");
  const { PPU, numFactura, RUTDocumento } = req.body;
  let PPUValue = await Service.doPPU(PPU, numFactura, RUTDocumento);
  //check if non empty
  if (PPUValue == null) {
    res.status(401).json({
      message: `No existen PPUs.`,
    });

    return res;
  }

  res.status(200).json(PPUValue);
  return res;
};

module.exports = { doPPU };
