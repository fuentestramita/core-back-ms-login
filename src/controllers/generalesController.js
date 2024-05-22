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
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    return req.headers.authorization.split(" ")[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

module.exports = { setSelected, extractToken };
