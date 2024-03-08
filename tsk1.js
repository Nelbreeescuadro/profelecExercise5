let numValue = 2;
let userName = "Deborah";
let boolValue = true;

let firstNum = parseFloat(prompt("Enter first number"));
let secondNum = parseFloat(prompt("Enter second number"));

let operation = prompt("Enter operation");
console.log("The operator is " + operation);

let result;

if (operation === "+") {
    result = firstNum + secondNum;
    console.log("The total is " + result);
} else if (operation === "-") {
    result = firstNum - secondNum;
    console.log("The total is " + result);
} else if (operation === "*") {
    result = firstNum * secondNum;
    console.log("The total is " + result);
} else if (operation === "/") {
    result = firstNum / secondNum;
    console.log("The total is " + result);
} else {
    console.log("Invalid Operator");
}
