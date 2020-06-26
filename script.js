const screen = document.getElementById("main-screen");

const addition = (a, b) => Number(a) + Number(b);
const subtraction = (a, b) => Number(a) - Number(b);
const multiplication = (a, b) => Number(a) * Number(b);
const division = (a, b) => Number(a) / Number(b);

let calculation = "";

const inputs = document.getElementsByClassName("input");
const screenInputs = document.getElementsByClassName("screen-input");

const addCalculation = (e) => {
  calculation += e.target.value;
};

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", addCalculation);
}

const screenWriting = (e) => {
  screen.innerHTML += e.target.value;
};

for(let j=0;j<screenInputs.length;j++){
  screenInputs[j].addEventListener("click", screenWriting)
}

const calculate = () => {
  let top = "";
  let operator = "";
  let bottom = "";
  for (let i = 0; i < calculation.length; i++) {
    if (
      calculation[i] === "+" ||
      calculation[i] === "-" ||
      calculation[i] === "*" ||
      calculation[i] === "/"
    ) {
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
};
