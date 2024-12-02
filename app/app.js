var express = require("express");
var app = express();
var port = 8080;
var path = require("path");
const nodemailer = require("nodemailer");

//email stuff

var email, fullName;
// Create a transporter object
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "un.sdg.newsletter@gmail.com",
    pass: "xpxo hjuu cayz zvao",
  },
});

app.post("/signup", (req, res) => {
  console.log(req.body);
});

// Configure the mailoptions object
const mailOptions = {
  from: "un.sdg.newsletter@gmail.com",
  to: email,
  subject: "Newsletter Signup",
  text: `Thank you ${fullName} for signing up to our newsletter`,
};

async function sendEmail(email, name) {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}

//set the view engine to ejs
app.set("view engine", "ejs");

//set the public folder
app.use(express.static("public"));

//index page
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

// energy page
app.get("/energy", (req, res) => {
  res.render("energy");
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

app.get("/health.json", (req, res) => {
  fs.readFile("./health.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});
