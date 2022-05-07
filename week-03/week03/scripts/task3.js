/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {

// Step 2: In the function, return the sum of the parameters number1 and number2
let sum = number1 + number2;
return sum;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
// Step 4: Assign the return value to an HTML form element with an ID of sum
// let sum = add(document.getElementById("addend1").value, document.getElementById("addend2").value);
// document.getElementById("sum").value = sum;
// }
let addend1 = document.getElementById("addend1").value;
let addend2 = document.getElementById("addend2").value;
let sum = parseInt(addend1) + parseInt(addend2);
document.getElementById("sum").value = sum;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById("addNumbers").addEventListener("click", addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(number1, number2) { 
let diifference = number1 - number2;  
return diifference;
}
document.getElementById("subtractNumbers").addEventListener("click", function() {
let minuend = document.getElementById("minuend").value;
let subtrahend = document.getElementById("subtrahend").value;
let difference = subtract(minuend, subtrahend);
document.getElementById("difference").value = difference;
});

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
let multiply = (number1, number2) => number1 * number2;
document.getElementById("multiplyNumbers").addEventListener("click", function() {
let factor1 = document.getElementById("factor1").value;
let factor2 = document.getElementById("factor2").value;
let product = multiply(factor1, factor2);
document.getElementById("product").value = product;
});

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
let divide = (number1, number2) => number1 / number2;
document.getElementById("divideNumbers").addEventListener("click", function() {
let dividend = document.getElementById("dividend").value;
let divisor = document.getElementById("divisor").value;
let quotient = divide(dividend, divisor);
document.getElementById("quotient").value = quotient;
});
// Step 9: Test all of the mathematical functionality of the task3.html page.




/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
var today = new Date();

// Step 2: Declare a variable to hold the current I add some extra code to the variable today to find the hours , minutes, seconds. I use the built-in methods to do this.
var date  = today;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
var year = date.getFullYear();
// Step 4: Assign the current  variable to an HTML form element with an ID of 
document.getElementById("year").innerHTML =  year;




/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let odds = numbers.filter(number => number % 2 !== 0);
document.getElementById("odds").innerHTML = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evens = numbers.filter(number => number % 2 === 0);
document.getElementById("evens").innerHTML = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfArray = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById("sumOfArray").innerHTML = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let multiplied = numbers.map(number => number * 2);
document.getElementById("multiplied").innerHTML = multiplied;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = numbers.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById("sumOfMultiplied").innerHTML = sumOfMultiplied;

