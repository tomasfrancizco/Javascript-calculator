const addition = (a,b) => a+b;
const subtraction = (a,b) => a-b;
const multiplication = (a,b) => a*b;
const division = (a,b) => a/b;

let calculation = [];

const numbers = document.getElementsByClassName("number")

function printVal(e){
  console.log(e.target.value)
}

for(let i=0;i<numbers.length;i++){
  numbers[i].addEventListener("click", printVal)
}