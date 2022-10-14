"use strict";

//Declare container and result bar
const body = document.querySelector("body");
const container = document.createElement("div");
const resultBar = document.createElement("input");

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
container.style.height = "80vh";
container.style.width = "64vh";
resultBar.style.borderRadius = "10%";
resultBar.style.height = "75%";

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
  let index = rowArray[i];
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
  button.style.width = "100%";
  button.style.display = "block";
  button.style.borderRadius = "10%";
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
  console.log(currentButton);
}

///Spreading fifth row buttons
let zeroButton = document.getElementById("16");
let periodButton = document.getElementById("17");
let equalButton = document.getElementById("18");
zeroButton.style.flex = "2";
periodButton.style.flex = "1";
equalButton.style.flex = "1";
