let firstNum = 0;
let secondNum = 0;
let operator = '';
let value = 0;

function operate(operator, num1, num2) {
    value = operator(num1, num2);
    return value;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

const display = document.getElementById("displayText");

function populate(value) {
    display.innerText = value;
}

populate(operate(divide,2,3));



/* 
add event listener to every button
if first button clicked =/= number, disconsider
when number is clicked, start storing its value 
keep storing the value until a operator number is clicked
when operator number is clicked, "save" the number actual value,
and save the operation
if button clicked = operation, change the operation value
if button clicked after operation is a number,
start storing the 2number value
keep storing the value until another key =/= number is clicked
if another operator is clicked, merge 1number and 2number into 1number,
based on first operation, save the second operation,
start saving the new 2number

*/
