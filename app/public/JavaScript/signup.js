document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    try {
      const nameInput = document.getElementById("Signup-name");
      const emailInput = document.getElementById("Signup-email");
      const commentInput = document.getElementById("Signup-comment");

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Thank you! We will send you an email.");
        form.reset();
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
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
