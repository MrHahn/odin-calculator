let firstNum, secondNum, operator, needsCleared;
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
    if(data == '.'){
        display.textContent += data;
    }else{
        display.textContent += data;
    }
    
}

function getNumbers(){
    if(needsCleared){
        display.textContent = '';
        needsCleared = false;
    }

    updateDisplay(this.dataset.num);

    if((firstNum && operator) || (firstNum === 0 && operator)){
        secondNum = parseFloat(display.textContent);
    }
}


function getOperator(){
    if(this.dataset.oper == 'equals'){
        return;
    }
    firstNum = parseFloat(display.textContent);
    operator = this.dataset.oper;
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

clearBtn.addEventListener('click', clearDisplay);

equals.addEventListener('click', function(){
    operate(firstNum, secondNum, operator);
})