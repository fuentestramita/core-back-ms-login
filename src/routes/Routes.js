const express = require("express");
const ValidateController = require("../controllers/ValidateController");
const LoginController = require("../controllers/LoginController");
const MenuController = require("../controllers/MenuController");
const router = express.Router();

router.post("/validate", ValidateController.doValidate);
router.post("/login", LoginController.doLogin);
router.post("/menu", MenuController.doMenu);

module.exports = router;
