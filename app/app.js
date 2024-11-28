var express = require("express");
var nodemailer = require("nodemailer");
var app = express();
var port = 8080;

//set the view engine to ejs
app.set("view engine", "ejs");

//set the public folder
app.use(express.static("External Files"));

//initial page
app.get("/", function (req, res) {
  res.render("index");
});

//renders home page
app.get("/index", function (req, res) {
  res.render("index");
});

//renders team page
app.get("/team", function (req, res) {
  res.render("team");
});

//renders signup page
app.get("/signup", function (req, res) {
  res.render("signup");
});

//renders goal select page
app.get("/goal%20select", function (req, res) {
  res.render("goal select");
});

//renders health page
app.get("/health", function (req, res) {
  res.render("health");
});

//renders energy page
app.get("/energy", function (req, res) {
  res.render("energy");
});

//renders land life page
app.get("/land%20life", function (req, res) {
  res.render("land life");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
