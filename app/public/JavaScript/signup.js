const { json } = require("body-parser");

async function submission() {
  var email = document.getElementById("Signup-email").value;
  var name = document.getElementById("Signup-name").value;
  var surname = document.getElementById("Signup-surname").value;
  var fullName = name + " " + surname;
  console.log(email);
  console.log(name);
  console.log(surname);

  sendEmail(email, fullName);
}

const requestHeader = {
  "Content-Type": application / json,
};

fetch("/signup"),
  {
    method: "POST",
    Headers: requestHeader,
    body: json.stringify(submission()),
  };

//The image section
let image = document.getElementById("image");
/* Add image paths here or remove if only single image wanted*/
let images = [
  "../Assets/img 1.jpg",
  "../Assets/img 2.jpg",
  "../Assets/img 3.jpg",
  "../Assets/img 4.jpg",
];

function setImage() {
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random];
}

window.onload = setImage;
