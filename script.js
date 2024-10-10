let leftOperand;
let rightOperand;
let operator;

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

