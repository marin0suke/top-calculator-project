let leftOperand;
let rightOperand;
let operator;
let displayValue = ""; 

const displayElement = document.querySelector(".display"); // connects to display html.
const operands = document.querySelectorAll(".operand"); // get all operands.
const operators = document.querySelectorAll(".operator"); // grab all signs/operators.

operands.forEach(operand => { // make number button clicks display the number.
    operand.addEventListener("click", () => {
        const buttonValue = operand.textContent; //grabs what is in button text.
        displayValue += buttonValue; // concats it to display value var.
        displayElement.textContent = displayValue; // displayElement is what shows up on screen - equal it to displayValue so it shows up. 
    });
});

operators.forEach(operator => { // grabs textcontent from operator buttons (don't display but store only)
    operator.addEventListener("click", () => {
        const buttonValue = operator.textContent;
        // store operator if - there is no operator yet. ? but this can be replaced too..
        // if clear, then everything clear (run clear function)
        if (buttonValue === "C") {
            console.log("clear button clicked");
            clearCalc();
        }
        // if equals? run operate function.
    })
})

function clearCalc () {
    // reset everything.
    displayValue = "";
    leftOperand = null; // learned null is best for number vals - intentional assignment for "this has no value" but is still defined.
    rightOperand = null;
    operator = null;
    displayElement.textContent = displayValue; // displays nothing.
};


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

