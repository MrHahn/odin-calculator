let firstNum;

let secondNum;

let operator; 

let needsCleared;

const equals = document.querySelector('.equals');
const clearBtn = document.querySelector('.btn-clear');

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
            display.textContent = add(num1, num2);
            break;
        case "subtract":
            display.textContent = subtract(num1, num2);
            break;
        case "multiply":
            display.textContent = multiply(num1, num2);
            break;
        case "divide":
            display.textContent = divide(num1, num2);
            break;
    }
}

function updateDisplay(data){
    display.textContent += data;
}

function getNumbers(){
    // if(this.dataset.num == 'clear'){
    //     return;
    // }
    if(needsCleared){
        display.textContent = '';
        needsCleared = false;
    }
    updateDisplay(parseInt(this.dataset.num));

    if(firstNum && operator){
        secondNum = parseInt(display.textContent);
        console.log('secondNum:' + secondNum);
    }
}


function getOperator(){
    if(this.dataset.oper == 'equals'){
        return;
    }
    firstNum = parseInt(display.textContent);
        console.log('firstNum:' + firstNum);
    operator = this.dataset.oper;
    console.log(operator);
    needsCleared = true;
}

function clearDisplay(){
    display.textContent = ''
    firstNum = '';
    secondNum = '';
    operator = '';
    needsCleared = false;
}


numberButtons.forEach(button => button.addEventListener('click', getNumbers));

operatorButtons.forEach(button => button.addEventListener('click', getOperator ));

equals.addEventListener('click', function(){
    operate(firstNum, secondNum, operator);
})

clearBtn.addEventListener('click', clearDisplay);