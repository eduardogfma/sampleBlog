const express = require("express");
// const ejs = require("ejs");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// Routes
const index = require("./routes/index");
const compose = require("./routes/compose.routes");

app.use(index);
app.use(compose);

module.exports = app;
