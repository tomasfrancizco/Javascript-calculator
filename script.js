const screen = document.getElementById("main-screen");
const topScreen = document.getElementById("top-screen")

let calc = "";

const inputs = document.getElementsByClassName("input");
const screenInputs = document.getElementsByClassName("screen-input");

const addCalculation = (e) => {
  calculation += e.target.value;
};

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", addCalculation);
}

const screenWriting = (e) => {
  topScreen.innerHTML += e.target.value;
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
    e.key == "/" ||
    e.key == "."
  ) {
    calculation += e.key;
    topScreen.innerHTML += e.key;
  } else if(e.key == "Enter"){
    calculate()
  } else if(e.key == "Backspace") {
    clearAll()
  }
};

document.addEventListener("keydown", onKeyPress);

const calculate = () => {
  screen.innerHTML = eval(calculation)
};

const clearAll = () => {
  calculation = "";
  screen.innerHTML = "";
  topScreen.innerHTML = "";
};
