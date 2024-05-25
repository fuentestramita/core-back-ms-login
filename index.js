const express = require("express");
const Router = require("./src/routes/Routes");
const cors = require("cors");
const app = express();

const corsConfig = {
  credentials: true,
  allowedHeaders: ["Authorization", "Content-Type", "Cookie"],
  exposedHeaders: ["Authorization"],
  origin: ["http://localhost:3000", "https://calm-flower-019659e10-14.centralus.4.azurestaticapps.net/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsConfig));

app.options("/get-menu", cors(corsConfig));

const port = process.env.port || 8080;
const cookieParser = require("cookie-parser");

require("dotenv").config();

module.exports = app;
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
