const express = require("express");
const Router = require("./src/routes/Routes");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.listen(PORT, () => {
  try {
    console.log(`Server listening on port ${PORT}`);
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
