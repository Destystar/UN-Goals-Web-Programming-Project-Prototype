const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("MainSite"));

app.listen(port, () => {
  console.log("Connection Successful");
});

app.get("/", (req, res) => {
  res.sendFile("index.html", (err) => {
    if (err) console.log(err);
  });
});
