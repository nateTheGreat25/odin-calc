// require 1
function add (num1, num2) {
    return num1 + num2;
}
function subtract (num1, num2) {
    return num1 - num2;
}
function multiply (num1, num2) {
    return num1 * num2;
}
function divide (num1, num2) {
    return num1 / num2;
}

// require 2
let firstNum = 0;
let secondNum = 0;
let operator = "";

function operate (num1, num2, operation) {
    if (operation === "plus") {
        return add(num1, num2);
    } else if (operation === "subtract") {
        return subtract(num1, num2);
    }else if (operation === "multiply") {
        return multiply(num1, num2);
    } else if (operation === "divide") {
        return divide(num1, num2);
    }
}



let numbers = [];
const numberButtons = document.querySelectorAll(".num-button");
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", () => {
        numbers.push(numberButton.textContent); 
        changeDisplay(numbers)
        

    });
});


const operateButtons = document.querySelectorAll(".operate-button");
operateButtons.forEach((operateButton) => {
    operateButton.addEventListener("click", () => {
        operator = operateButton.textContent;
    })
})


function changeDisplay (numArray, operator) {
    const display = document.querySelector("#display");
    if (numArray[0] !== undefined) {
        display.textContent = numArray[0];
    }
    if (numArray[1] !== undefined) {
        
        display.textContent = `${numArray[0]} ${numArray[1]}`;
        
    }
}
