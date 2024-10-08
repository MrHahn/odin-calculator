let firstNum, secondNum, operator, needsCleared;
const equals = document.querySelector('.equals');
const clearBtn = document.querySelector('.btn-clear');
const numberButtons = document.querySelectorAll('.calculator-numbers button');
const operatorButtons = document.querySelectorAll('.calculator-operator button');
const display = document.querySelector('.calculator-screen span');
const backspaceBtn = document.querySelector('.btn-backspace');

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
        if(display.textContent.includes('.')){
            console.log('already has .');
        }else{
            display.textContent += data;
        } 
    }else{
        display.textContent += data;
    }
    
}

function getNumbers(){
    if(needsCleared){
        display.textContent = '';
        needsCleared = false;
    }

    if(this.dataset.num == 'equals'){
        return;
    }

    updateDisplay(this.dataset.num);

    if((firstNum && operator) || (firstNum === 0 && operator)){
        secondNum = parseFloat(display.textContent);
    }
}


function getOperator(){
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

function backspace(){
    let displayArr = display.textContent.split('');
    displayArr.pop();
    let newDisplay = displayArr.join('');
    display.textContent = newDisplay;
    if((firstNum && operator) || (firstNum === 0 && operator)){
        secondNum = parseFloat(display.textContent);
    }
}

function keyboardSupport(e){
    let keyPressed = e.key;
    if(keyPressed >= '0' && keyPressed <= '9'){
        let btn = document.querySelector('.btn' + e.key);
        btn.click();
    }
}


numberButtons.forEach(button => button.addEventListener('click', getNumbers));

operatorButtons.forEach(button => button.addEventListener('click', getOperator ));

clearBtn.addEventListener('click', clearDisplay);

backspaceBtn.addEventListener('click', backspace);

equals.addEventListener('click', function(){
    operate(firstNum, secondNum, operator);
})

window.addEventListener('keydown', keyboardSupport);