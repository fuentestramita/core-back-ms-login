const express = require("express");
const Router = require("./src/routes/Routes");
const app = express();
const port = process.env.port || 8080;
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.listen(port, () => {
  try {
    console.log("listening on root");
    console.log(`Server listening on port ${port}`);
    app.use(express.json());
    app.use(cookieParser());
    app.use("/api", Router);
    app.use("/", (req, res) => {
      res.send({
        status: "404",
        data: `<h1>Something went wrong! please use <a href="/api">/api</a></h1>`,
      });
    });
  } catch (error) {
    console.log(error);
  }
});
