let leftOperand = document.querySelector(".")
let rightOperand;
let operator;

let displayValue = ""; //

const displayElement = document.querySelector(".display"); // connects to display html.
const operands = document.querySelectorAll(".operand"); // get all operands.

operands.forEach(operand => { // gets number from button 
    operand.addEventListener("click", () => {
        const buttonValue = operand.textContent;
        displayValue += buttonValue; // concat it.
        displayElement.textContent = displayValue; // displayElement is what shows up on screen - equal it to displayValue so it shows up. 
    });
});



function operate(leftOperand, operator, rightOperand) {
    switch (operator) {
        case "+":
            leftOperand + rightOperand;
            break;
        case "-":
            leftOperand - rightOperand;
            break;
        case "*":
            leftOperand * rightOperand;
            break;
        case "/":
            leftOperand / rightOperand;
            break;
        default:
            // ?
            break;
    }
}

