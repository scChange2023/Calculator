"use strict";

//Declare container and result bar
const body = document.querySelector("body");
const container = document.createElement("div");
let resultBar = document.createElement("input");

//Ad classes to container and result bar
container.classList.add("container");
resultBar.classList.add("resultBar");

//Append Container and resultBar
body.appendChild(container);
container.appendChild(resultBar);

//Styling body and container
body.style.minHeight = "100vh";

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.backgroundColor = "black";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.height = "70vh";
container.style.width = "56vh";
resultBar.style.borderRadius = "0%";
resultBar.style.height = "75%";
resultBar.style.fontSize = "large";

//Row array for creating container for buttons
const rowArray = [
  "first_row",
  "second_row",
  "third_row",
  "fourth_row",
  "fifth_row",
];

///Looping through rowArrays to create row containers
for (let i = 0; i < rowArray.length; i++) {
  let rowContainer = document.createElement("div");
  rowContainer.classList.add(`${rowArray[i]}`);
  container.appendChild(rowContainer);
  rowContainer.style.display = "flex";
  rowContainer.style.height = "75%";

  rowContainer.style.maxWidth = "100%";
  rowContainer.style.maxHeight = "100%";
}

///Looping through rowArrays to create and add buttons to the container
let buttonIndex = 0;
let rowContainerIndex = 0;
//Moves to next rowContainer once i is divisable by 4
while (buttonIndex <= 18) {
  let button = document.createElement("button");
  button.classList.add("button");
  //   console.log(rowContainerIndex);
  button.setAttribute("id", `${buttonIndex}`);
  let currentContainer = document.querySelector(
    `.${rowArray[rowContainerIndex]}`
  );
  //   console.log(currentContainer);
  currentContainer.appendChild(button);
  button.style.width = "70%";
  button.style.display = "block";
  button.style.borderRadius = "5%";
  button.style.backgroundColor = "#505050";
  button.style.color = "white";
  button.style.fontSize = "5vh";
  if (rowContainerIndex == 0) {
    button.style.backgroundColor = "#D4D4D2";
    button.style.color = "black";
  }
  if (
    buttonIndex == 3 ||
    buttonIndex == 7 ||
    buttonIndex == 11 ||
    buttonIndex == 15
  ) {
    rowContainerIndex++;
    button.style.backgroundColor = "#FF9500";
    button.style.color = "white";
  }
  if (buttonIndex == 18) {
    button.style.backgroundColor = "#FF9500";
    button.style.color = "white";
  }
  buttonIndex++;
}

let buttonTextContentArray = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

// Looping through textContent array to insert text content to buttons
for (let i = 0; i <= buttonTextContentArray.length - 1; i++) {
  let currentButton = document.getElementById(`${i}`);
  currentButton.textContent = buttonTextContentArray[`${i}`];
  //   if ((index = "16")) {
  //     currentButton.style.flex = "2";
  //   }
  //   console.log(currentButton);
}

///Spreading fifth row buttons
let buttons = document.querySelectorAll(".button");
resultBar = document.querySelector(".resultBar");

let decimalButton = document.getElementById("17");
let equalButton = document.getElementById("18");
let additionButton = document.getElementById("15");
let subtractionButton = document.getElementById("11");
let multiplcationButton = document.getElementById("7");
let divisionButton = document.getElementById("3");
let percentageButton = document.getElementById("2");
let deleteButton = document.getElementById("0");
let plusMinusButton = document.getElementById("1");

let zeroButton = document.getElementById("16");
let oneButton = document.getElementById("12");
let twoButton = document.getElementById("13");
let threeButton = document.getElementById("14");
let fourButton = document.getElementById("8");
let fiveButton = document.getElementById("9");
let sixButton = document.getElementById("10");
let sevenButton = document.getElementById("4");
let eightButton = document.getElementById("5");
let nineButton = document.getElementById("6");

resultBar.type = "text";
resultBar.size = "13000000";
zeroButton.style.flex = "2";
decimalButton.style.flex = "1";
equalButton.style.flex = "1";

zeroButton.value = 0;
oneButton.value = 1;
twoButton.value = 2;
threeButton.value = 3;
fourButton.value = 4;
fiveButton.value = 5;
sixButton.value = 6;
sevenButton.value = 7;
eightButton.value = 8;
nineButton.value = 9;
decimalButton.value = ".";

// let input1 = "";
// let input2 = "";

let input1 = { a: "" }; //a:''
let input2 = {};

let operatorObj = {
  addition: false,
  subtraction: false,
  multiplcation: false,
  division: false,
};

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    resultBar.value = "";
    input1.a += button.value;
    resultBar.value = input1.a;
  })
);

function operatorFalse() {
  Object.keys(operatorObj).forEach((key) => {
    operatorObj[key] = false;
  });
}

function transferInput() {
  input2.a = JSON.parse(JSON.stringify(resultBar.value));
  input1.a = "";
}

additionButton.addEventListener("click", () => {
  if (input2.a > 0) {
    totalInputs();
    transferInput();
    operatorFalse();
    operatorObj.addition = true;
  } else {
    transferInput();
    operatorFalse();
    operatorObj.addition = true;
  }
});

subtractionButton.addEventListener("click", () => {
  if (input2.a > 0) {
    totalInputs();
    transferInput();
    operatorFalse();
    operatorObj.subtraction = true;
  } else {
    transferInput();
    operatorFalse();
    operatorObj.subtraction = true;
  }
});

multiplcationButton.addEventListener("click", () => {
  if (input2.a > 0) {
    totalInputs();
    transferInput();
    operatorFalse();
    operatorObj.multiplcation = true;
  } else {
    transferInput();
    operatorFalse();
    operatorObj.multiplcation = true;
  }
});

divisionButton.addEventListener("click", () => {
  if (input2.a > 0) {
    totalInputs();
    transferInput();
    operatorFalse();
    operatorObj.division = true;
  } else {
    transferInput();
    operatorFalse();
    operatorObj.division = true;
  }
});

percentageButton.addEventListener("click", () => {
  resultBar.value = parseFloat(resultBar.value) * 0.1;
  input1.a = resultBar.value;
  input2.a = "";
});

deleteButton.addEventListener("click", () => {
  resultBar.value = "";
  input1.a = "";
  input2.a = "";
});

plusMinusButton.addEventListener("click", () => {
  resultBar.value = parseFloat(resultBar.value) * -1;
  input1.a = resultBar.value;
  input2.a = "";
});

function totalInputs() {
  if (operatorObj.addition == true) {
    resultBar.value = parseFloat(input1.a) + parseFloat(input2.a);
  }
  if (operatorObj.subtraction == true) {
    resultBar.value = parseFloat(input2.a) - parseFloat(input1.a);
  }
  if (operatorObj.division == true) {
    resultBar.value = parseFloat(input2.a) / parseFloat(input1.a);
  }
  if (operatorObj.multiplcation == true) {
    resultBar.value = parseFloat(input1.a) * parseFloat(input2.a);
  }
  input1.a = resultBar.value;
  input2.a = "";
}

equalButton.addEventListener("click", totalInputs);

console.log(input1, input2);
console.log(operatorObj);
