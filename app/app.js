var express = require("express");
var app = express();

//set the view engine to ejs
app.set("view engine", "ejs");

//index page
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(8080);
console.log("Server is listening on port 8080");
