let firstNum = '';
let secondNum = '';
let operation = '';
let value = 0;
let subDisplay = '';

let isEqual = false;

const display = document.getElementById("displayText");
const displayUpper = document.getElementById("displayUpperText");

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
    if (num2 == 0) {
        return 'Cannot divide by zero';
    } else {
        return num1 / num2;
    }
}

//const display = document.getElementById("displayText");
//const displayUpper = document.getElementById("displayUpperText");

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
    //console.log(operation);
    subDisplay = firstNum + ' ' + operation;
    displayUpper.innerText = subDisplay;
    changeNumClassTo2();
}

function performOperation() {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result = 0;
    if (operation == '+') {
        result = operate(add, firstNum, secondNum);
    }
    if (operation == '-') {
        result = operate(subtract, firstNum, secondNum);
    }
    if (operation == 'x') {
        result = operate(multiply, firstNum, secondNum);
    }
    if (operation == '/') {
        result = operate(divide, firstNum, secondNum);
    }
    firstNum = String(result);
    secondNum = '';
    populate();
}

function performEqual() {
    if (secondNum != '') {
        displayUpper.innerText = subDisplay + ' ' + secondNum + ' =';
        performOperation();
    }
    changeNumClassTo1();
}
 
function resetCalc() {
    display.innerText = '';
    displayUpper.innerText = '';
    subDisplay = '';
    firstNum = '';
    secondNum = '';
    changeNumClassTo1();
}

function addFloat() {
    let testArray = [];
    let element = document.getElementById('calc1');
    if (element.className == 'gridButton') {
        testArray = [...firstNum];
        if (!testArray.some(item => item == '.')) {
            firstNum += '.';
            display.innerText = firstNum;
        }
    } else {
        testArray = [...secondNum];
        if (!testArray.some(item => item == '.')) {
            secondNum += '.';
            display.innerText = secondNum;
        }
    }
}

function useBack() {
    let testArray = [];
    let element = document.getElementById('calc1');
    if (element.className == 'gridButton') {
        testArray = [...firstNum];
        testArray.splice((testArray.length - 1), 1);
        console.log(testArray);
        firstNum = testArray.join('');
        console.log(firstNum);
        display.innerText = firstNum;
    } else {
        testArray = [...secondNum];
        testArray.splice((testArray.length - 1), 1);
        console.log(testArray);
        secondNum = testArray.join('');
        console.log(secondNum);
        display.innerText = secondNum;
    }
}

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
keyEqual.addEventListener('click', performEqual);

const keyReset = document.getElementById("calcReset");
keyReset.addEventListener('click', resetCalc);

const keyFloat = document.getElementById("calcFloat");
keyFloat.addEventListener('click', addFloat);

const keyBack = document.getElementById("calcBack");
keyBack.addEventListener('click', useBack);

