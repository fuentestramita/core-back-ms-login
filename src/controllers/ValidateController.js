const Service = require("../services/ValidateService");
const generales = require("../controllers/generalesController.js");
const tokenValidation = require("../middleware/tokenValidation.js");
const jwt = require("jsonwebtoken");

const { validateRut } = require("@fdograph/rut-utilities");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: `${process.env.MAIL_HOST}`, // direccion smtp
  port: `${process.env.MAIL_PORT}`, //587 | 465
  secure: `${process.env.MAIL_SECURE}`, //true | false
  service: `${process.env.MAIL_SERVICE}`,
  auth: {
    user: `${process.env.MAIL_SENDER}`,
    pass: `${process.env.MAIL_PASS}`,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

const doValidate = async (req, res) => {
  try {
    const { inputRut, inputPass } = req.body;
    if (!inputRut || !inputPass) {
      return res.status(400).json({ message: "Rut y contraseña requeridos." });
    }
    if (!validateRut(inputRut)) {
      return res.status(400).json({ message: "El Rut no es valido." });
    }
    let loginValue = await Service.validarUsuario(inputRut, inputPass, res);
    //Check if user actually exists
    //validation

    if (loginValue == null) {
      res.status(401).json({
        message: `No existen usuarios registrados con el rut ${inputRut}`,
      });

      return res;
    } else if (loginValue.error != null && loginValue.error != "") {
      res.status(500).json({
        error: `${loginValue.error}`,
      });

      return res;
    } else if (loginValue.length > 0) {
      loginValue = loginValue[0];
    }

    //send Mail
    sendMail(loginValue.usuarioEmail, loginValue.codigo);

    res.status(200);
    res.json({
      code: loginValue.statuscode,
      status: loginValue.status,
      message: `Ingreso autorizado: ${loginValue.nombreUsuario}`,
      rut: loginValue.rut,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

const sendMail = (mail, codigo) => {
  const mailOptions = {
    from: `${process.env.MAIL_SENDER}`,
    to: `${mail}`,
    subject: `Codigo de Autorización  ${codigo}`,
    html: `Este es su código para ingresar a tramita <br><br><font color='red'><b>${codigo}</b></font><br><br><br>Atte.<br><br>Tramita S.P.A.`,
    TargetName: "STARTTLS/smtp.office365.com",
    EnableSsl: true,
    UseDefaultCredentials: false,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error + " info:" + info);
    } else {
    }
  });
};

const getToken = async (req, res) => {
  const cookies = req.cookies;
  var accessT = cookies.accessJWT;

  const data = {
    data: `${accessT}`,
  };
  res.status(200);
  return res.json(data);
};

const refreshToken = async (req, res) => {
  const cookies = req.cookies;
  //var accessT = cookies.accessJWT;
  const { accessT, refreshT } = generales.extractToken(req);

  jwt.verify(accessT, process.env.ACCESS_KEY, (err, decoded) => {
    if ((validateToken = (req, res))) {
      exp = err.expiredAt;
      if (!(Date.now() >= exp * 1000)) {
        jwt.decode(refreshT);
        return res.status(200).json({ message: "Token Actualizado" });
      }
    } else return res.status(401).json({ message: "Inicie sesión nuevamente.2" }); //Si no hay header, return no autorizado
  });
};

module.exports = { doValidate, getToken, refreshToken };
