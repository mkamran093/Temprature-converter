const degreeElement = document.getElementById("degrees");
const typeElement = document.getElementById("type");
const resultElement = document.getElementById("result");

function calculate() {
  let degree = degreeElement.value;
  let type = typeElement.value;

  if (type === "Fahrenheit") {
    return (degree * (9 / 5) + 32).toFixed(2);
  } else {
    return ((degree - 32) * (5 / 9)).toFixed(2);
  }
}

function renderResult() {
  resultElement.value = calculate();
  console.log(calculate());
}
