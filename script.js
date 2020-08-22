const screen = document.getElementById("main-screen");
const topScreen = document.getElementById("top-screen");

let calc = "";

const operators = ["+", "-", "*", "/"];

const inputs = document.getElementsByClassName("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", addCalculation);
}

const screenInputs = document.getElementsByClassName("screen-input");
for (let j = 0; j < screenInputs.length; j++) {
  screenInputs[j].addEventListener("click", screenWriting);
}

document.addEventListener("keydown", onKeyPress);

function addCalculation(e) {
  calc += e.target.value;
  if (
    operators.includes(calc[calc.length - 2]) &&
    operators.includes(calc[calc.length - 1])
  ) {
    calc = calc.slice(0, -2) + calc.slice(-1);
  }
}

function screenWriting() {
  topScreen.innerHTML = calc;
}

function calculate() {
  if (calc) {
    const result = eval(calc);
    screen.innerHTML = result;
    calc = "";
  }
}

function onKeyPress(e) {
  const keys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
  ];
  if (keys.includes(e.key)) {
    calc += e.key;
    if (
      operators.includes(calc[calc.length - 2]) &&
      operators.includes(calc[calc.length - 1])
    ) {
      calc = calc.slice(0, -2) + calc.slice(-1);
    }
    screenWriting();
  } else if (e.key == "Enter") {
    calculate();
  } else if (e.key == "Backspace") {
    clearAll();
  }
}

function clearAll() {
  calc = "";
  screen.innerHTML = "";
  topScreen.innerHTML = "";
}
