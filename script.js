let leftOperand = null;
let rightOperand = null;
let currentOperator = null;
let displayValue = ""; 

const displayElement = document.querySelector(".display"); // connects to display html.
const operands = document.querySelectorAll(".operand"); // get all operands.
const operators = document.querySelectorAll(".operator"); // grab all signs/operators.

operands.forEach(operand => { // make number button clicks display the number.
    operand.addEventListener("click", () => {
        const buttonValue = operand.textContent; //grabs what is in button text.
        displayValue += buttonValue; // concats it to display value var.
        displayElement.textContent = displayValue; // displayElement is what shows up on screen - equal it to displayValue so it shows up. 
        if (currentOperator === null) { // 1st try to get operators to work. - set to left and right.
            leftOperand = parseFloat(displayValue);
            console.log(displayValue);
        } else {
            rightOperand = parseFloat(displayValue);
            console.log(displayValue);
        }
        console.log(displayValue);
        console.log(leftOperand);
        console.log(rightOperand);
    });
});

operators.forEach(operator => { // grabs textcontent from operator buttons (don't display but store only)
    operator.addEventListener("click", () => {
        const buttonValue = operator.textContent;
        // store operator if - there is no operator yet. ? but this can be replaced too..
        switch (buttonValue) {
            case "+":
            case "-":
            case "×":
            case "÷":
                currentOperator = buttonValue;
                console.log(currentOperator);
                break;
            case "=":
                operate();
                break;
            case "C":
                clearCalc();
                break;
            default:
                console.warn("Unexpected button: ", buttonValue);
        }
        // add "button pressed" effect for one that is pushed. make so can change operators?
    })
})

function clearCalc () {
    // reset everything.
    displayValue = "";
    leftOperand = null; // learned null is best for number vals - intentional assignment for "this has no value" but is still defined.
    rightOperand = null;
    currentOperator = null;
    displayElement.textContent = displayValue; // displays nothing.
};


function operate(leftOperand, currentOperator, rightOperand) {
    switch (currentOperator) {
        case "+":
            return leftOperand + rightOperand; // changed all from break to return so result is computed without need to extra vars. and exits this func. 
        case "-":
            return leftOperand - rightOperand;
        case "×":
            return leftOperand * rightOperand;
        case "÷":
            return leftOperand / rightOperand;
        default:
          return null;
    }
}

