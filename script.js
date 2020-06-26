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

for (let j = 0; j < screenInputs.length; j++) {
  screenInputs[j].addEventListener("click", screenWriting);
}

const onKeyPress = (e) => {
  if (
    e.key == "0" ||
    e.key == "1" ||
    e.key == "2" ||
    e.key == "3" ||
    e.key == "4" ||
    e.key == "5" ||
    e.key == "6" ||
    e.key == "7" ||
    e.key == "8" ||
    e.key == "9" ||
    e.key == "+" ||
    e.key == "-" ||
    e.key == "*" ||
    e.key == "/"
  ) {
    calculation += e.key;
    screen.innerHTML += e.key;
  } else if(e.key == "Enter"){
    calculate()
  }
};

document.addEventListener("keydown", onKeyPress);

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
