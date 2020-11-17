var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomBtn = document.querySelector(".random");

function randomColor() {
  rdmColor1 =
    "#" + (Math.random().toString(16) + "000000").slice(2, 8).toUpperCase();
  rdmColor2 =
    "#" + (Math.random().toString(16) + "000000").slice(2, 8).toUpperCase();
  return rdmColor1, rdmColor2;
}

function randomGradient() {
  color1.value = randomColor();
  color2.value = randomColor();
  setGradient();
}

function setGradient() {
  var startColor = color1.value;
  var endColor = color2.value;
  body.style.background =
    "linear-gradient(to right, " + startColor + ", " + endColor + ")";

  css.textContent = body.style.background + ";";
}

window.addEventListener("load", setGradient());
randomBtn.addEventListener("click", randomGradient);
color1.addEventListener("change", setGradient);
color2.addEventListener("change", setGradient);