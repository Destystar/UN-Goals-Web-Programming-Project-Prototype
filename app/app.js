const express = require("express");
const app = express();
const port = 8080;
const fs = require("fs");

//set the view engine to ejs
app.set("view engine", "ejs");

//set the public folder
app.use(express.static("External Files"));

//index page
app.get("/", function (req, res) {
  res.render("index");
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