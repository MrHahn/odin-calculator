let firstNum;

let secondNum;

let operator; 

let needsCleared;

const numberButtons = document.querySelectorAll('.calculator-numbers button');
const operatorButtons = document.querySelectorAll('.calculator-operator button');
let display = document.querySelector('.calculator-screen span');

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a, b){
    if(b == 0){
        return "What do you think youre doing?";
    }
    return a / b;
}

function operate(num1, num2, operator){
    switch(operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
    }
}

function updateDisplay(data){
    display.textContent += data;
}

function getNumbers(){
    if(needsCleared){
        display.textContent = '';
        needsCleared = false;
    }
    updateDisplay(parseInt(this.dataset.num));

    if(firstNum && operator){
        secondNum = display.textContent;
        console.log('secondNum:' + secondNum);
    }
}


function assignFirstHalf(){
    firstNum = display.textContent;
        console.log('firstNum:' + firstNum);
    operator = this.dataset.oper;
    console.log(operator);
    needsCleared = true;
}


numberButtons.forEach(button => button.addEventListener('click', getNumbers));

operatorButtons.forEach(button => button.addEventListener('click', assignFirstHalf ));