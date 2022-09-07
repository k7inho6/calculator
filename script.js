let firstNum = '';
let secondNum = '';
let operation = '';
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

function populate() {
    if (this.className == 'gridButton') {
        firstNum += this.innerText;
        display.innerText = firstNum;
    } else if (this.className == 'gridButton2') {
        secondNum += this.innerText;
        display.innerText = secondNum;
    } else {
        display.innerText = firstNum;
    }
}

function changeNumClassTo2() {
    for (i=0; i<10; i++) {
        let element = document.getElementById(`calc${i}`);
        element.className = "gridButton2";
    }
}

function changeNumClassTo1() {
    for (i=0; i<10; i++) {
        let element = document.getElementById(`calc${i}`);
        element.className = "gridButton";
    }
}

function registerOperation() {
    if (firstNum != '' && secondNum != '') {
        performOperation();
    }
    operation = this.innerText;
    console.log(operation);
    changeNumClassTo2();
}

function performOperation() {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result = 0;
    if (operation == '+') {
        result = operate(add, firstNum, secondNum);
    }
    firstNum = String(result);
    secondNum = '';
    console.log(firstNum);
    populate();
}

//populate(operate(divide,2,3));

// const key0 = document.getElementById("calc0");
// key0.addEventListener('click', populate);

// const key1 = document.getElementById("calc1");
// key1.addEventListener('click', populate);

// const key2 = document.getElementById("calc2");
// key2.addEventListener('click', populate);

// const key3 = document.getElementById("calc3");
// key3.addEventListener('click', populate);

// const key4 = document.getElementById("calc4");
// key4.addEventListener('click', populate);

// const key5 = document.getElementById("calc5");
// key5.addEventListener('click', populate);

// const key6 = document.getElementById("calc6");
// key6.addEventListener('click', populate);

// const key7 = document.getElementById("calc7");
// key7.addEventListener('click', populate);

// const key8 = document.getElementById("calc8");
// key8.addEventListener('click', populate);

// const key9 = document.getElementById("calc9");
// key9.addEventListener('click', populate);

for (i=0; i<10; i++) {
    let element = document.getElementById(`calc${i}`);
    element.addEventListener('click', populate);
}

const keyMulti = document.getElementById("calcMulti");
keyMulti.addEventListener('click', registerOperation);

const keySum = document.getElementById("calcSum");
keySum.addEventListener('click', registerOperation);

const keyDiv = document.getElementById("calcDivision");
keyDiv.addEventListener('click', registerOperation);

const keySub = document.getElementById("calcSub");
keySub.addEventListener('click', registerOperation);

const keyEqual = document.getElementById("calcEqual");
keyEqual.addEventListener('click', performOperation);


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
