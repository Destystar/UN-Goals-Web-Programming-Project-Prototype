document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    //try {
    const nameInput = document.getElementById("Signup-name");
    const emailInput = document.getElementById("Signup-email");
    const commentInput = document.getElementById("Signup-comment");

    var name = nameInput.value;
    var email = emailInput.value;
    var comment = commentInput.value;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const formBody = {
      name: name,
      email: email,
      comment: comment,
    };

    console.log(data);

    var response;

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formBody),
    })
      .then((response) => response.json())
      .then((responsedata) => {
        response = responsedata;
      })
      .then(() => {
        for (const [key, value] of Object.entries(response)) {
          console.log(`${key}: ${value}`);
        }
        if (response.send) {
          console.log("Sending the email");
          window.alert("Thank you for signing up");
          form.reset();
        } else {
          console.log("failed to send email");
        }
      });

    // response alerts for signup (alert for both error and successful sign up)
    // if (response.ok) {
    //   alert("Thank you for signing up!");
    //   form.reset();
    // } else {
    //   const errorMessage = await response.text();
    //   throw new Error(errorMessage);
    // }
    //} catch (error) {
    //console.error("Error:", error);
    //alert("An error occurred. Please try again.");
    //}
  });
});

/* Add image paths here or remove if only single image wanted*/
let images = [
  "/Assets/img1.jpg",
  "/Assets/img2.jpg",
  "/Assets/img3.jpg",
  "/Assets/img4.jpg",
];

function setImage() {
  let image = document.getElementById("image");
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random];
}

window.onload = setImage;
