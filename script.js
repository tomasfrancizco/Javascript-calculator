const screen = document.getElementById("main-screen");

const addition = (a, b) => Number(a) + Number(b);
const subtraction = (a, b) => Number(a) - Number(b);
const multiplication = (a, b) => Number(a) * Number(b);
const division = (a, b) => Number(a) / Number(b);

let calculation = "";

const numbers = document.getElementsByClassName("number");

const addCalculation = e => {
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
      screen.innerHTML = addition(top, bottom);
      break;
    case "-":
      screen.innerHTML = subtraction(top, bottom);
      break;
    case "*":
      screen.innerHTML = multiplication(top, bottom);
      break;
    case "/":
      screen.innerHTML = division(top, bottom);
      break;
    default:
      return;
  }
};

const clearAll = () => {
  calculation = "";
  screen.innerHTML = "";
}
