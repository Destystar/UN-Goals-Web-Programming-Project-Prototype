var express = require("express");
var nodemailer = require("nodemailer");
var app = express();
var port = 8080;
var path = require("path");

//set the view engine to ejs
app.set("view engine", "ejs");

// sets views directory
app.set('views', path.join(__dirname, 'views'));

//set the public folder
app.use(express.static("public"));

<<<<<<< HEAD
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
=======
//index page
app.get("/", (req, res) => {
  res.render("index");
});

// energy page
app.get("/energy", (req, res) => {
  res.render("energy");
>>>>>>> 3c085746d34fb92a74cddbbd248ac40cfb824a03
});

// goal select
app.get("/goal-select", (req, res) => {
  res.render("goal-select");
});

// health
app.get("/health", (req, res) => {
  res.render("health");
});

// land life
app.get("/land-life", (req, res) => {
  res.render("land-life");
});

//signup
app.get("/signup", (req, res) => {
  res.render("signup");
});

//team
app.get("/team", (req, res) => {
  res.render("team");
});


app.listen(port, () => {
  console.log("Connection Successful");
});

app.get("/", (req, res) => {
  res.sendFile("index.html", (err) => {
    if (err) console.log(err);
  });
});

app.get('/health.json', (req, res) => {
  fs.readFile('./health.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});