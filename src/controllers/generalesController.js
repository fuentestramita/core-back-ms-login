function setSelected(resultSet, setvalue) {
  try {
    resultSet.forEach((result) => {
      result.selected = result.ID == setvalue ? true : false;
    });
    return resultSet;
  } catch (err) {
    return { error: err };
  }
}

// function prueba(resultSet) {
//   console.log("paso" + setvalue);
//   return "paso";
// }

function extractToken(req) {
  const cookies = req.cookies;
  let accessT = null;

  if (accessT == null) {
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
      accessT = req.headers.authorization.split(" ")[1];
    } else if (req.query && req.query.token) {
      accessT = req.query.token;
    }
  }

  const refreshT = cookies.refreshJWT;

  return {
    accessT,
    refreshT,
  };
}

module.exports = { setSelected, extractToken };
