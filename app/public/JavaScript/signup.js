//The Email Stuff
const nodemailer = require("nodemailer");

//button pressed call function
document.getElementById("Signup-button").addEventListener("submit", submission);

async function submission(event) {
  event.preventDefault();

  var email = document.getElementById("Signup-email").value;
  var name = document.getElementById("Signup-name").value;
  var surname = document.getElementById("Signup-surname").value;
  var fullName = name + " " + surname;

  sendEmail(email, fullName);
}

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

// Configure the mailoptions object
const mailOptions = {
  from: "un.sdg.newsletter@gmail.com",
  to: email,
  subject: "Newsletter Signup",
  text: `Thank you ${fullName} for signing up to our newsletter`,
};

//the function to actually send the email
async function sendEmail(email, name) {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}

//The image section
//let image = document.getElementById("image");
/* Add image paths here or remove if only single image wanted*/
let images = [
  "/Assets/img 1.jpg",
  "/Assets/img 2.jpg",
  "/Assets/img 3.jpg",
  "/Assets/img 4.jpg",
];

function setImage() {
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random];
}

window.onload = setImage;
