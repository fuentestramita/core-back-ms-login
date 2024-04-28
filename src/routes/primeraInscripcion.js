const express = require("express");
const ValidateController = require("../controllers/primeraInscripcionController");
const router = express.Router();
const verifyToken = require("../middleware/tokenValidation");

router.get("/primeraInscripcion", primeraInscripcionController.getPrimeraInscripcion);

module.exports = router;
