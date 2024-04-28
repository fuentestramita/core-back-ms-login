const express = require("express");
const ValidateController = require("../controllers/ValidateController");
const LoginController = require("../controllers/LoginController");
const MenuController = require("../controllers/MenuController");
const primeraInscripcion = require("../controllers/primeraInscripcionController");
const router = express.Router();
const verifyToken = require("../middleware/tokenValidation");

router.post("/validate", ValidateController.doValidate);
router.post("/login", LoginController.doLogin);
router.post("/menu", verifyToken, MenuController.doMenu);
router.get("/primeraInscripcion", primeraInscripcion.getPrimeraInscripcion);

module.exports = router;
