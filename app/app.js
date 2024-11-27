var express = require("express");
var app = express();
var port = 8080;

//set the view engine to ejs
app.set("view engine", "ejs");

//set the public folder
app.use(express.static("External Files"));

//index page
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
