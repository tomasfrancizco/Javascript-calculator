const screen = document.getElementById("main-screen");

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

let calculation = "";

const numbers = document.getElementsByClassName("number");

function addCalculation(e) {
  calculation += e.target.value;
  console.log(calculation);
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", addCalculation);
}

const calculate = () => {
  let top = "";
  let operator = "";
  let bottom = "";
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "+" || calculation[i] === "-" || calculation[i] === "*" || calculation[i] === "/") {
      operator = calculation[i];
      top = calculation.split(calculation[i])[0];
      bottom = calculation.split(calculation[i])[1];
    }
  }
  switch (operator) {
    case "+":
      screen.innerHTML = `${Number(top) + Number(bottom)}`;
      break;
    case "-":
      screen.innerHTML = `${Number(top) - Number(bottom)}`;
      break;
    case "x":
      screen.innerHTML = `${Number(top) * Number(bottom)}`;
      break;
    case "/":
      screen.innerHTML = `${Number(top) / Number(bottom)}`;
      break;
    default:
      return;
  }
};
