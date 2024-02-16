const express = require("express");
const ValidateController = require("../controllers/ValidateController");
const LoginController = require("../controllers/LoginController");
const MenuController = require("../controllers/MenuController");
const ppuController = require("../controllers/ppuController");
const router = express.Router();
const verifyToken = require("../middleware/tokenValidation");

router.post("/validate", ValidateController.doValidate);
router.post("/login", LoginController.doLogin);
router.post("/menu", verifyToken, MenuController.doMenu);
router.post("/primeraInscripcion", verifyToken, ppuController.doPPU);

module.exports = router;
