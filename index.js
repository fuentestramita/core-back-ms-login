const express = require("express");
const Router = require("./src/routes/Routes");
const app = express();
const port = process.env.port || 3000;
require("dotenv").config();

app.listen(port, () => {
  try {
    console.log("listening on root");
    console.log(`Server listening on port ${port}`);
    app.use(express.json());
    app.use("/api", Router);
    app.use("/", (req, res) => {
      res.send({
        status: "404",
        data: `<h1>Something went wrong! please use <a href="/api/validate">/api/validate</a></h1>`,
      });
    });
  } catch (error) {
    console.log(error);
  }
});
