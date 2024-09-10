let firstNum;

let secondNum;

let operator; 

const numberButtons = document.querySelectorAll('.calculator-numbers button');
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
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

function updateDisplay(data){
    display.textContent += data;
}

function gatherData(){
    // on every number button click, fire event listener and append (+=) the numbers to eachother in the display
    updateDisplay(parseInt(this.dataset.num));


    // when an operator button is clicked, set the value in the display to the first variable and set the operation
    // to the operator variable

    // on same event listener for number buttons, check if first num variable is filled, if so, clear the display first
    // then add the new number.

    // when equals is pressed, this will pass the variables into the operate function and display the returned value to the 
    // display
}


numberButtons.forEach(button => button.addEventListener('click', gatherData));