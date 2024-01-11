/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/

console.log("Its alive!!")

/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/

// boolean
let isTrue = true
const isFalse = false

// number
let a = 10
const b = 32

// String
const firstName = "Lars"
const middleName = 'Gunnar'
const templateLiteral = `${firstName} ${middleName}`// Template Literal
const stringConcatonation = firstName + " " + middleName

console.log(templateLiteral)
console.log(stringConcatonation)

// Array (lists)
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

// Other Types

// Null
/**
 * This is a data type which we should contain some value in the future
 */
const notYetAValue = null

// Undefined
let IamNotDefined
console.log(IamNotDefined)

// Objects
/**
 * These collections of data
 */
const person = {
  name: "Lars",
  age: 34,
  role: "teacher"
}

/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

// Addition operator
const sum = 4 + 4 // Numerical addition
const greeting = "Greeting" + " " + "Padawan" // String concatonation

const difference = 30 - 20 // Subtraction
const fraction = 2 / 3 // Division
const area = 10 * 40 // Mutliplaction

let x = 10
x = x + 10
x += 5
x++

let y = 10
y = y - 10
y -= 5
y--

// Bonus Operators

// Exponent
const kubed = 100 ** 3 // 100 * 100 * 100

const rest = 10 % 3 // 10 - 3 * 3
console.log(rest)

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

//your code here

/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = false;

//your code here
