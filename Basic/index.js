// // Logging a message to the console
// console.log(`hello`);

// // Displaying an alert box with a message
// window.alert("Learning JavaScript?");

// // This is a single-line comment

// /* This is a 
//    multiline comment
// */

// // Changing the text content of an HTML element with id 'myH1' to "Hello"
// document.getElementById('myH1').textContent = "Hello";

// // Retrieving the text content of an HTML element with id 'myP1'
// document.getElementById('myP1').textContent;

// /* 
// Variable: A container that stores a value and behaves as if it were the value it contains.

// 1. Declaration: This is done using the `let` keyword.
//    Example:
//    let x;

// 2. Assignment: This is done by using the assignment operator `=`.
//    Example:
//    x = 10;
// */

// // Declaring a number variable 'age' and assigning it a value of 23
// let age = 23;
// console.log(age); // Logging the value of 'age'

// // Declaring a string variable 'iphonePrice' and assigning it a value of "999.99"
// let iphonePrice = "999.99";
// console.log(iphonePrice); // Logging the value of 'iphonePrice'

// // Using backticks to create a template literal and logging a message
// console.log(`you are ${age} years old.`);
// console.log(`the iPhone 14 prices: ${iphonePrice} only`);
// console.log(typeof age); // Logging the type of 'age'

// /* 
// String: A series of characters.
// */

// // Declaring string variables using double and single quotes
// let firstName = "Priyansh";
// let lastName = 'Yadav';
// let email = "PriyanshYadav123@gmail.com";
// console.log(typeof firstName); // Logging the type of 'firstName'
// console.log(typeof email); // Logging the type of 'email'

// /* 
// Booleans: Values that are either true or false.
// Typically used as flags in programs.
// */

// // Declaring a boolean variable 'online' and assigning it a value of true
// let online = true;
// console.log(typeof online); // Logging the type of 'online'
// console.log(`You are online: ${online}`); // Logging a message with the value of 'online'

// // Changing the text content of HTML elements with ids 'p1' and 'p2'
// document.getElementById("p1").textContent = firstName + lastName;
// document.getElementById("p2").textContent = `you are ${age} years old.`;

// /* 
// Arithmetic Operators: Used to perform arithmetic on operands (values, variables, etc.)
// Operators include +, -, *, /, %, and **.
// */

// // Declaring a variable 'students' and assigning it a value of 30
// let students = 30;

// console.log(students); // Logging the value of 'students'
// students = students + 12; // Adding 12 to 'students'
// console.log(students); // Logging the updated value
// students = students - 2; // Subtracting 2 from 'students'
// console.log(students); // Logging the updated value
// students = students / 2; // Dividing 'students' by 2
// console.log(students); // Logging the updated value
// students = students * 2; // Multiplying 'students' by 2
// console.log(students); // Logging the updated value
// students = students ** 2; // Raising 'students' to the power of 2
// console.log(students); // Logging the updated value
// let extraStudent = students % 2; // Finding the remainder when 'students' is divided by 2
// console.log(extraStudent); // Logging the value of 'extraStudent'

// // Using augmented assignment operators
// students += 1; // Adding 1 to 'students'
// console.log(students); // Logging the updated value
// students -= 1; // Subtracting 1 from 'students'
// console.log(students); // Logging the updated value
// students *= 2; // Multiplying 'students' by 2
// console.log(students); // Logging the updated value
// students /= 2; // Dividing 'students' by 2
// console.log(students); // Logging the updated value
// students %= 1; // Finding the remainder when 'students' is divided by 1
// console.log(students); // Logging the updated value
// students **= 2; // Raising 'students' to the power of 2
// console.log(students); // Logging the updated value

// // Using increment and decrement operators
// students++; // Incrementing 'students' by 1
// console.log(students); // Logging the updated value
// students--; // Decrementing 'students' by 1
// console.log(students); // Logging the updated value

// /* 
// Operator Precedence:
// 1. Parentheses ()
// 2. Exponents **
// 3. Multiplication *, Division /, and Modulus %
// 4. Addition + and Subtraction -
// */

// // Evaluating an expression with various operators
// let results = 1 + 2 * 3 + 4 ** 2; // 1 + (2 * 3) + (4 ** 2) = 1 + 6 + 16 = 23
// console.log(results); // Logging the value of 'results'

//How to accept user Input

//1. THE EASY WAY : Window prompt

let username ;
username = window.prompt("what is your name ?")
console.log(`my name is ${username}`)


//2. THE PROFESSIONAL WAY : HTML textbox
let proUsername;

document.getElementById("mysubmit").onclick = function (){
   proUsername = document.getElementById("mytext").value;
   document.getElementById("myH2").textContent = `Hello ${proUsername}`
}