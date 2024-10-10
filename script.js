let leftOperand = null;
let rightOperand = null;
let currentOperator = null;
let displayValue = ""; 

const displayElement = document.querySelector(".display"); // connects to display html.
const operands = document.querySelectorAll(".operand"); // get all operands.
const operators = document.querySelectorAll(".operator"); // grab all signs/operators.

operands.forEach(operand => { // iterate over all elements grabbed by operands var. (class operand in this case)
    operand.addEventListener("click", () => {
        const buttonValue = operand.textContent; //grabs what is in button text.

        if(currentOperator !== null && displayValue === leftOperand.toString()) { // handle whether to reset screen or concat numbers clicked.
            displayValue = buttonValue; // reset the display to the first pushed button. ! 
        } else {
            displayValue += buttonValue; // concat, bc there is no operator yet, left operand isn't what is on display. (TEST THIS)
        }

        displayElement.textContent = displayValue; // displayElement is what shows up on screen - equal it to displayValue so it shows up. 

        if (currentOperator === null) { // now we are displaying what we need, we can conditionally set each operand.
            leftOperand = parseFloat(displayValue); // set left to what is on display.
            console.log("Left operand: ", leftOperand);
        } else { // operator in play :
            rightOperand = parseFloat(displayValue);
            console.log("Right operand: ", rightOperand)
        }
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
                displayElement.textContent = displayValue; // actually show on screen. 
                console.log(currentOperator);
                // button effect to look pressed.
                break;
            case "=":
                operate();
                displayValue = solution; // problem with this !! not sure.
                displayElement.textContent = displayValue;
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
    let solution; // 1st try to get solution working.
    switch (currentOperator) {
        case "+":
            solution = leftOperand + rightOperand; // changed all from break to return so result is computed without need to extra vars. and exits this func. 
            break;
        case "-":
            solution = leftOperand - rightOperand;
        case "×":
            return leftOperand * rightOperand;
        case "÷":
            return leftOperand / rightOperand;
        default:
          return null;
    } 
    return parseFloat(solution);
}

