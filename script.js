let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById('sum-el')
// Add 
function addition(){
    let result = num1 + num2;
    sumEl.innerText = "Sum:" + result; 
}

// Subtract 
function subtract(){
    let result = num1 - num2;
    sumEl.innerText = "Sum:" + result; 
}

// Divide 
function divide(){
    let result = num1 / num2;
    sumEl.innerText = "Sum:" + result; 
}

// Multiply
function multiply(){
    let result = num1 * num2;
    sumEl.innerText = "Sum:" + result; 
}