let bigYellowCircle = document.querySelector("#bigYellowCircle");
let blueSquare = document.querySelector("#blueSquare");
let greenPentagon = document.querySelector("#greenPentagon");

function setTransform(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

window.addEventListener("DOMContentLoaded", scrollLoop);

let xScrollPosition;
let yScrollPosition;

function scrollLoop() {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

  setTransform(0, yScrollPosition * -0.2, bigYellowCircle);
  setTransform(0, yScrollPosition * -1.5, blueSquare);
  setTransform(0, yScrollPosition * 0.6, greenPentagon);

  requestAnimationFrame(scrollLoop);
}
