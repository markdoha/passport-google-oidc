const express = require("express");
const Router = require("./routes/google.routes");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/auth", Router);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
