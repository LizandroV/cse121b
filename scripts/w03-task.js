/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let add1 = Number(document.querySelector("#add1").value);
    let add2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(add1, add2);
}

document.querySelector("#addNumbers").addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

let divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);

/* Decision Structure */

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
const odds = numbersArray.filter((num) => num % 2 === 1);
document.getElementById("odds").innerHTML = odds;

/* Output Evens Only Array */
const evens = numbersArray.filter((num) => num % 2 === 0);
document.getElementById("evens").innerHTML = evens;

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
const multiplied = numbersArray.map(number => number * 2);
document.getElementById("multiplied").innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multiplied.reduce((sum, number) => sum + number);
document.getElementById("sumOfMultiplied").innerHTML = sumOfMultiplied;