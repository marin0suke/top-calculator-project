let leftOperand = null;
let rightOperand = null;
let currentOperator = null;
let displayValue = "0"; 

const displayElement = document.querySelector(".display"); // connects to display html.
const operands = document.querySelectorAll(".operand"); // get all operands.
const operators = document.querySelectorAll(".operator"); // grab all signs/operators.
const decimal = document.querySelector("#decimal"); // grab decimal point by its id. - create separate event listener for decimal.
const backspace = document.querySelector("#backspace");

decimal.addEventListener("click", () => {
    if(!displayValue.includes(".")) { // 2nd attempt - create own event listener.
        displayValue += ".";
        displayElement.textContent = displayValue; // 
    };
});

backspace.addEventListener("click", () => {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1); // removes last character.
    } else {
        displayValue = "0";
    }

    displayElement.textContent = displayValue; // update display.
});

operands.forEach(operand => { // iterate over all elements grabbed by operands var. (class operand in this case)
    if (operand.id !== "decimal") {
        operand.addEventListener("click", () => {
            const buttonValue = operand.textContent; //grabs what is in button text.

            if(displayValue === "0" || currentOperator !== null && rightOperand === null) { // handle whether to set displayValue or concat numbers clicked.
                displayValue = buttonValue; 
            } else {
                displayValue += buttonValue; // concat, bc there is no operator yet, left operand isn't what is on display. (TEST THIS)
            };

            displayElement.textContent = displayValue; // displayElement is what shows up on screen - equal it to displayValue so it shows up. 

            if (currentOperator === null) { // now we are displaying what we need, we can conditionally set each operand.
                leftOperand = parseFloat(displayValue); // set left to what is on display.
                console.log("Left operand: ", leftOperand);
            } else { // operator in play :
                rightOperand = parseFloat(displayValue);
                console.log("Right operand: ", rightOperand); 
            };
        });
    };
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
                // add check for if there is already all three vars set:
                if (leftOperand !== null && currentOperator !== null && rightOperand !== null) {
                    const result = operate(leftOperand, currentOperator, rightOperand);
                    displayElement.textContent = result; // display result instead of display.
                    leftOperand = result; // use result as new leftOperand.
                    rightOperand = null; // remove rightOperand.
                };

                currentOperator = buttonValue;
                console.log(currentOperator);
                // button effect to look pressed.
                break;
            case "=":
                if (leftOperand === null || operator === null || rightOperand === null) {
                    displayElement.textContent = displayValue; // if equals is pressed but there is nothing stored in the display value - display nothing.
                } else {
                    let result = operate(leftOperand, currentOperator, rightOperand);
                    displayElement.textContent = isNaN(result) ? "Error" : result; // i needed a result var lol. won't be displayValue bc result was created inside different function that had nothing to do with displayValue. 
                }
                break;
            case "C":
                clearCalc();
                break;
            default:
                console.warn("Unexpected button: ", buttonValue);
        };
        // add "button pressed" effect for one that is pushed. make so can change operators?
    });
});

function clearCalc () {
    // reset everything.
    displayValue = "0";
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
            break;
        case "×":
            solution = leftOperand * rightOperand;
            break;
        case "÷":
            solution = rightOperand !== 0 ? leftOperand / rightOperand : NaN;
            break;
        default:
            solution = NaN;
            break;
    } 
    return solution;
}

