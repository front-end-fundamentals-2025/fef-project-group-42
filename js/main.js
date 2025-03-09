document.addEventListener("click", (e) => {
  let tar = e.target;
  if (tar.name == "toggle") tar.removeAttribute("class");
});

const darkModeButton = document.getElementById("DM-button");
const lightModeButton = document.getElementById("LM-button");
const bodyElement = document.querySelector("body");

if (localStorage.backColor) {
  bodyElement.style.backgroundColor = localStorage.backColor;
} else {
  bodyElement.style.backgroundColor = "#000000";
}
if (localStorage.textColor) {
  bodyElement.style.color = localStorage.textColor;
} else {
  bodyElement.style.color = "#ffffff";
}

lightModeButton.addEventListener("click", function (event) {
  let backColor = "#ffffff";
  let textColor = "#000000";
  bodyElement.style.backgroundColor = backColor;
  bodyElement.style.color = textColor;
  localStorage.backColor = backColor;
  localStorage.textColor = textColor;
});
darkModeButton.addEventListener("click", function (event) {
  let backColor = "#000000";
  let textColor = "#ffffff";
  bodyElement.style.backgroundColor = backColor;
  bodyElement.style.color = textColor;
  localStorage.backColor = backColor;
  localStorage.textColor = textColor;
});
