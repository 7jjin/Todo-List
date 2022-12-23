const images = [
    "1.png",
    //"2.jpg",
    //"3.jpg"
]
const right_bar = document.getElementById("right_bar");
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

right_bar.appendChild(bgImage);