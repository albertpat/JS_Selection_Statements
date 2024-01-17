console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

const x = 2;

let answer = prompt("Guess the number");

if(answer == x) {
  console.log("Congratulations!!!");
}
else if(answer > x) {
  console.log("too high");
}
else if (answer < x) {
  console.log("too low");
}

let birthMonth = prompt("What is your birth month?");

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january": 
  case "febuary":
    console.log("Winter");
    break;
  case "march": 
  case "april": 
  case "may":
    console.log("spring");
    break;
  case "august": 
  case "july": 
  case "june":
    console.log("Summer")
    break;
  case "november":
  case "october":
  case "september":
    console.log("Autumn")
    break;
  default:
  console.log("I don't know that month");
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);