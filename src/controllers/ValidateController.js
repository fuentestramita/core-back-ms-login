const Service = require("../services/ValidateService");
const { validateRut } = require("@fdograph/rut-utilities");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // direccion smtp
  port: 587, //587 | 465
  secure: false,
  service: `${process.env.MAIL_SERVICE}`,
  auth: {
    user: `${process.env.MAIL_SENDER}`,
    pass: `${process.env.MAIL_PASS}`,
  },
});

const doValidate = async (req, res) => {
  try {
    console.log("llegamos al controller");
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
    subject: "Codigo de verificacion",
    text: `Su código de verificación es : ${codigo}
    
    El código solo es válido durante 30 segundos.`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
    }
  });
};

module.exports = { doValidate };
