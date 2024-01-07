const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = document.querySelector("#result");
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  if (height === 0 || height === "" || isNaN(height)) {
    result.innerHTML = `<span>Please enter valid height and weight</span>`;
  } else if (weight === 0 || weight === "" || isNaN(weight)) {
    result.innerHTML = `<span>Please enter valid height and weight</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Your BMI Index is ${bmi}`;
  }
  form.reset();
});
