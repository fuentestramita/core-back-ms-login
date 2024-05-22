const express = require("express");
const Router = require("./src/routes/Routes");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
    exposedHeaders: ["Authorization"],
    credentials: true,
  })
);

const port = process.env.port || 8080;
const cookieParser = require("cookie-parser");

require("dotenv").config();

module.exports = app;
app.options("/get-menu", cors());
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
