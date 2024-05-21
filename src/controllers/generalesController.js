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

function prueba(resultSet) {
  console.log("paso" + setvalue);
  return "paso";
}

module.exports = { setSelected, prueba };
