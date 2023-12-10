const express = require("express");
const Router = require("./routes/Routes");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
  app.use(express.json());
  app.use("/api", Router);
  app.use("/", (req, res) => {
    res.send({
      status: "404",
      data: `<h1>Something went wrong! please use <a href="/api/seguros">/api/seguros</a> or <a href="/api/usuarios">/api/usuarios</a> </h1>`,
    });
  });
});
