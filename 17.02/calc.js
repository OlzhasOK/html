const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply"); 
const divide = document.getElementById("divide");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
let operation = "+";

plus.onclick = function() {
    operation = "+";
};

minus.onclick = function() {
    operation = "-";
};

multiply.onclick = function() {
    operation = "*";
};

divide.onclick = function() { 
    operation = "/";
};

function getResult(value) {
    if (value < 0) {
        result.style.color = 'red';
    } else {
        result.style.color = 'green';
    }
    result.textContent = value;
}

calculate.onclick = function() {
    const num1 = Number(firstInput.value);
    const num2 = Number(secondInput.value);

    switch (operation) {
        case "+":
            getResult(num1 + num2);
            break;
        case "-":
            getResult(num1 - num2);
            break;
        case "*":
            getResult(num1 * num2);
            break;
        case "/":
            if (num2 !== 0) {
                getResult(num1 / num2);
            } else {
                result.style.color = 'red';
                result.textContent = 'Ошибка: деление на ноль';
            }
            break;
        default:
            result.style.color = 'red';
            result.textContent = 'Ошибка: неизвестная операция';
    }
};
