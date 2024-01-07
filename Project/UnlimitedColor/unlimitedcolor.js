// generate a random color

const randomColor = function () {
  const hexColor = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexColor[Math.floor(Math.random() * 16)];
  }

  return color;
};

console.log(randomColor());

console.log(Math.floor(Math.random() * 16));

let colorChange = null;

const startChangingColor = function () {
  document.body.style.backgroundColor = randomColor();
};
const stopChangingColor = function () {
  clearInterval(colorChange);
  colorChange = null;
};

document.querySelector("#start").addEventListener("click", function () {
  colorChange = setInterval(startChangingColor, 1000);
});
document.querySelector("#stop").addEventListener("click", function () {
  stopChangingColor();
});
