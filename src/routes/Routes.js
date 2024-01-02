const express = require("express");
const ValidateController = require("../controllers/ValidateController");
const LoginController = require("../controllers/LoginController");
const router = express.Router();

router.post("/validate", ValidateController.doValidate);
router.post("/login", LoginController.doLogin);

module.exports = router;
