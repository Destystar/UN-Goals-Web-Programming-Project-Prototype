const express = require("express");
const app = express();
const port = 8080;
const fs = require("fs");

app.use(express.static("MainSite"));

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