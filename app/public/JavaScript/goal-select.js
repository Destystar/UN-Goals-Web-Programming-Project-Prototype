const filePath = "Data/goal-select.json";

const titleElement = document.querySelector("title");
const imagesElement = document.querySelector("#Images");

document.addEventListener("DOMContentLoaded", () => {
  fetch(filePath)
    .then((response) => response.json())
    .then((responseData) => {
      titleElement.innerText = responseData["title"];

      let containerElement = document.createElement("div");
      containerElement.setAttribute("class", "container");

      let healthAnchor = document.createElement("a");
      healthAnchor.setAttribute("href", "health");
      let healthImage = document.createElement("img");
      healthImage.setAttribute("src", responseData["image"]);
      img2Element.setAttribute("alt", responseData["alt"]);
      healthAnchor.appendChild(healthImage);

      let energyAnchor = document.createElement("a");
      energyAnchor.setAttribute("href", "energy");
      let energyImage = document.createElement("img");
      energyImage.setAttribute("src", responseData["image2"]);
      img2Element.setAttribute("alt", responseData["alt2"]);
      energyAnchor.appendChild(energyImage);

      let landlifeAnchor = document.createElement("a");
      landlifeAnchor.setAttribute("href", "land-life");
      let landlifeImage = document.createElement("img");
      landlifeImage.setAttribute("src", responseData["image3"]);
      img2Element.setAttribute("alt", responseData["alt3"]);
      landlifeAnchor.appendChild(landlifeImage);

      containerElement.appendChild(healthAnchor);
      containerElement.appendChild(energyAnchor);
      containerElement.appendChild(landlifeAnchor);

      imagesElement.appendChild(containerElement);
    });
});
