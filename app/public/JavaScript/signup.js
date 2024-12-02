document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    var nameInput = document.getElementById("Signup-name");
    var emailInput = document.getElementById("Signup-email");
    var commentInput = document.getElementById("Signup-comment");

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameInput.value,
          email: emailInput.value,
          comment: commentInput.value,
        }),
      });

      if (response.ok) {
        alert("Thank you! We will send you an email.");
        form.reset();
      } else {
        var errorMessage = await response.text();
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
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
