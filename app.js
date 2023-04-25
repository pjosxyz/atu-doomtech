const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || "8000";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const homeRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.join(__dirname, "/public")));

app.use(homeRoutes);

app.listen(port);
