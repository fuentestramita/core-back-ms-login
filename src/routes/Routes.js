const express = require("express");
const ValidateController = require("../controllers/ValidateController");
const LoginController = require("../controllers/LoginController");
const MenuController = require("../controllers/MenuController");
const primeraInscripcion = require("../controllers/primeraInscripcionController");
const empresas = require("../controllers/empresaController");
const router = express.Router();
const verifyToken = require("../middleware/tokenValidation");

router.post("/login", ValidateController.doValidate);
router.post("/validate", LoginController.doLogin);
router.post("/get-menu", MenuController.doMenu);
router.post("/get-primera-inscripcion", primeraInscripcion.getPrimeraInscripcion);
//router.post("/save-primera-inscripcion", primeraInscripcion.savePrimeraInscripcion);
router.post("/get-empresas", empresas.getEmpresas);
router.post("/get-token", ValidateController.getToken);
router.post("/refresh-token", ValidateController.refreshToken);

module.exports = router;
