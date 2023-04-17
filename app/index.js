const express = require("express");
const cors = require("cors");
const router = require("../config/routes.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(router);

module.exports = app;
