const express = require("express");
const routes = require("./routes/google.routes");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/auth", routes);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
