const Service = require("../services/LoginService");

async function doLogin(req, res) {
  try {
    const { usuarioID, codigo } = req.body;
    console.log(`ID: ${usuarioID} | codigo ${codigo}`);
    if (codigo == null || codigo < 100000 || codigo > 999999) {
      return res
        .status(400)
        .json({ message: "El código ingresado no es valido." });
    }
    if (usuarioID == 0 || usuarioID == null) {
      return res
        .status(400)
        .json({ message: "El ID de Usuario no es valido." });
    }
    const respuesta = await Service.loginUsuario(usuarioID, codigo);
    if (respuesta == null) {
      res.status(300);
      res.json({ message: "El Codigo ingresado es incorrecto" });
    }
    //Send response
    res.status(respuesta.statuscode);
    res.json({
      status: `${respuesta.status}`,
      nombre: `${respuesta.nombreUsuario}`,
      PerfilID: respuesta.perfilID, //temporal
    });
    res.end();
    return res;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { doLogin };
