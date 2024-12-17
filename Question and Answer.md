# javascprit introduction


 ##### QUESTION-1 What is JavaScript? Explain the role of JavaScript in web development

###### ANSWER : 

 javaScript is a versatile srcipting languege primarily used to create interactive web pages.

It works alongside html and css to bring web pages to life.

javascript file extention is .js 

javaScript can calculate, manipulate and validate data.

javascript is most popular client side scripting language.

javaScript can also run on servers using tools like Node.js, allowing developers to build entire applications with it.

 

SOME FEATURES OF JAVA SCPRIT : 

                    light weight scripting language

                    dynamic Typing

                    object-oriented programming support

                    functional style

                    prototype-based

                    interpreted language

                    single-threaded 

                    web workers

BASIC EXAMPLE :

console.log("Hello, world!");
___________________________
##### QUESTION-2 How is JavaScript different from other programming languages like Python orJava?

###### ANSWER:
JavaScript is different from other programming languages like Python or Java in several ways:

1.  **Scripting vs. programming**: JavaScript is a scripting language, which means it's executed line by line, whereas programming languages like Java are compiled beforehand.

2.  **Dynamic typing**: JavaScript is dynamically typed, meaning you don't need to declar the data type of a variable before using it. In  contrast, languages like Java are statically typed.

3.  **Prototype-based**: JavaScript is a prototype-based language, which means it uses prototypes to create objects. This is different from class-based languages like Java.

4.  **Functional style**: JavaScript supports functional programming, which allows you to write code that's more concise and easier to read.

so it's different.

___________________________
##### QUESTION-3 Discuss the use of < script > tag in HTML. How can you link an external JavaScript file to an HTML document?

###### ANSWER:

The script tag is a crucial element in html, used to embed executable code or data within an html document. While it can be used with other languages, its primary function is to include javascript code, which adds interactivity and dynamic behavior to web pages.

 CREATE A JAVASCPRIT FILE : 

Create a new text file and save it with a .js extension (e.g., script.js).
write your javaScript code within this file.

link the JavaScript File in your html:

open your html file and add the following code within the <  head > or < body > section:
_____________________________________

# Variables and Data Types

##### QUESTION-1  What are variables in JavaScript? How do you declare a variable using var, let,and const.

###### ANSWER:

In JavaScript, variables are containers used to store data values. They allow you to store information that can be used later in your code. Think of them as labeled boxes where you can place different items DATA.

DECLARE A VARIABLE USING var, let, AND  const :-

var :

                       var a="Hi";
                       var a=12;
                       var b=245.24;
                       var c=1232323n;
let :

                       let a=70;
                       console.log(a);
const : 

                    const a=20;
                    console.log(a);
                    const a=10;
                    console.log(a);
__________________________________________

##### QUESTION-2 Explain the different data types in JavaScript. Provide examples for each.

###### ANSWER :

DEFINITION : it's specify the different sizes and values that can be stored in a variable.

TYPE :

String
Boolean
Undefined
Null
Number
Symbol
Object

 SOME EXAMPLE:

let name="raj";      //string
let length = 22;      //number
const age=22;         //number
let age = false;      //boolen
_________________________________

##### QUESTION-3 What is the difference between undefined and null in JavaScript?

###### ANSWER :

Undefined  : A variable has been declared but hasn't been assigned a value.

Null       : An intentional assignment to indicate that a variable has no value.

EXAMPLE :

###### UNDEFINED

let a;
console.log(a); // Output: undefined

###### NULL

let a = null;
console.log(a); // Output: null
__________________________________________

# JavaScript Operators




##### QUESTION-1  What is javascript operator?

###### ANSWEWR : 

 DEFINITIO : Operators are symbols that perform specific operations on operands

 TYPES OF OPERARORS : 

 1. Arithmetic Operators :
- Additiom
- Subtraction
- Multiplication
- Division
- Modulus
- Incriment ++
- Decrement --

2. Assignment Operators: 
- Assignment    =
- Subtract and assign  -=
- Divide and assign /= 
- Multiply and assign *=
- Modulus and assign %=
- Add and assign  +=

3. Comparison Operators:
- Equal to ==
- Not equal to !=
- Greater than >
- Less than <
- Greater than or equal to >=
- Less than or equal to <=

4. Logical Operators:
- Logical and &&
- Logical or ||
- Logical not !


5. Bitwise Operators:

- Bitwise and &
- Bitwise or |
- Bitwise xor ^
- Bitwise not ~
- Left Shift >>
- Right shift <<

6. Ternary / condation operator ?

 SIMPLE EXAMPLE : 

1.
- Arithmetic Operators
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

2.
- Assignment Operators
a += 5; // a = a + 5
b -= 2; // b = b - 2

3.
- Comparison Operators
let isEqual = a == b;
let isNotEqual = a != b;
let isGreaterThan = a > b;

4.
- Logical Operators
let isTrue = true && false;
let isFalse = true || false;
let isNotTrue = !true;

5.
- Ternary Operator
let result = a > b ? "a is greater" : "b is greater";

_________________________________

##### QUESTION-2 What is the difference between == and === in JavaScript?

###### ANSWER :

the main difference between == and === in JavaScript is that == performs loose equality check, while === performs.

LOOSE EQUALITY : The loose equality operator compares the values of two variables after performing type conversion if necessary. 

STRICT EQUALITY : The  strict equality operator compares the values of two variables without performing type conversion.
______________________________________________________

# Control Flow (If-Else, Switch)


##### QUESTION-1  What is control flow in JavaScript? Explain how if-else statements work with an example.

###### ANSWER : 

DEFINITION : Control flow refers to the order in which statements are executed in a program. 

ef-else STATEMENT WORK :   

An if-else statement is a fundamental control flow statement in programming that allows you to execute different code blocks based on a specific condition.

EXAMPLE :
 
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
____________________________________________________

# Loops (For, While, Do-While)

##### QUESTION-1  Explain the different types of loops in JavaScript (for, while, do-while). Provide a basic example of each 

###### ANSWER : 

DIFFERENT TYPE OF LOOPS :


while Loop
do-while Loop
for Loop
for-in Loop
for-of Loop
nested for Loop

###### EXAMPLE OF for LOOP :

let x;

for (x = 2; x <= 4; x++) {
    console.log("Value of x: " + x);
}

###### OUTPUT:

Value of x: 2
Value of x: 3
Value of x: 4

- BASIC EXAMPLE 

###### EXAMPLE OF while LOOP :

let val = 1;

while (val < 6) {
    console.log(val); 
    val += 2;
}

###### OUTPUT :

1
3
5

 ###### EXAMPLE OF do whie LOOP :

int i = 0;
do {
  System.out.println(i);
  i++;
}
while (i < 5);

###### OUTPUT 

0
1
2
3
4
______________

##### WUESTION-2  What is the difference between a while loop and a do-while loop?

###### ANSWER : 

WHILE LOOP :

The condition is checked before the code block is executed.   

The condition is checked before the code block is executed.   

SYNTEX :

while (condition) {
    // code to execute
}

DO-WHILE LOOP :

The code block is executed at least once, regardless of the condition.

 After the first execution, the condition is checked. 

 SYNTEX :

 do {
    // code to execute
} while (condition);

___________________________________________

# Function


##### QUESTION-1 What are functions in JavaScript? Explain the syntax for declaring and calling a function

###### ANSWER : 

A function is a block of code i.e used to complete any task i.e called function and  A function is re-usables.

SYNTEX :

// Declaring a function
function functionName(parameter1, parameter2, ...) {
  // Code to be executed
}

// Calling a function
functionName(argument1, argument2, ...);
______________________________________________________________

##### QUESTION-2 What is the difference between a function declaration and a function expression

###### ANSWER : 

FUNCTION DECLARATION :

hoisted, meaning they can be used before they are declared in the code.

always have a name.

FUNCATION EXPRESSION :

Not hoisted, meaning they must be declared before they are used.

without a name or named.

______________________________________________________________

 ##### QUESTION-3 Discuss the concept of parameters and return values in functions.

###### ANSWER : 

PARAMETARS : 

parameters are variables that are passed to a function when it's called.
they act as placeholders for values that will be used within the function's body.

RETURN VAMUES : 

a function can return a value to the part of the code that called it.
the return statement is used to specify the value to be returned.

_________________________________________________________________

# Arrays


##### QUESTION-1 What is an array in JavaScript? How do you declare and initialize an array?

###### ANSWER : 

DEFINITION : array is used to stored multiple data in a single elements or variables there we used array.

DECLARE AND INITAIALIZE :

let myArray: Declares a variable named myArray.

[: Opens the array literal    

]: Closes the array literal.

myArray = [1, 2, 3, 4, 5]; Initializes the array with the values 1, 2, 3, 4, and 5

EXAMPLE :

let myArray = [10, 20, 30, "Hello", true];
____________________________________________

 ##### QUESTION-1 Explain the methods push(), pop(), shift(), and unshift() used in arrays

###### ANSWER : 

- PUSH ():

Adds one or more elements to the end of an array.

EXAMPLE :

let fruits = ['apple', 'guavava'];
fruits.push('orange');
console.log(fruits); //  Output: ['apple', 'guavava', 'orange']

- POP () :

Removes the last element from an array.

EXAMPLE :

let fruits = ['apple', 'guavava', 'orange'];
let removedFruit = fruits.pop();
console.log(fruits); // Output: ['apple', 'guavava']
console.log(removedFruit); // Output: 'orange'

- SHIFT () :

Removes the first element from an array.

EXAMPLE :

let fruits = ['apple', 'guavava', 'orange'];
let removedFruit = fruits.shift();
console.log(fruits); // Output: ['guavava', 'orange']
console.log(removedFruit); // Output: 'apple'

UNSHIFT () :

Adds one or more elements to the beginning of an array.

EXAMPLE : 

let fruits = ['banana', 'orange'];
fruits.unshift('apple', 'grape');
console.log(fruits); // Output: ['apple', 'grape', 'banana', 'orange']
____________________________________________________



# Objects



#####  QUESTION-1 What is an object in JavaScript? How are objects different from arrays? 

###### ANSWER : 

DEFINITION :  An object is instances or examples of class 

 DIFFERENT FROM ARRAYS :  

Arrays often store elements of the same data type, whereas objects can store values of different data types associated with their keys.

Arrays are ordered lists of elements accessed by numerical indices, while objects are unordered collections of key-value pairs accessed by unique keys.

_______________________________

##### QUESTION-2 Explain how to access and update object properties using dot notation and bracket notations.

###### ANSWER : 

DOT NOTATION :

Dot notation is a concise way to access and modify properties of an object in JavaScript. It's particularly useful when property names are valid JavaScript identifiers.

Use the dot (.) operator followed by the property name.

BRACKET NOTATION :

Bracket notation is a versatile method to access and update properties of an object in JavaScript, especially when property names are dynamic or contain special characters.

Use square brackets ([]) with the property name as a string.
______________________________________


_______________________________________________

# JavaScript Event

##### QUESTION-1  What are JavaScript events? Explain the role of event listeners.

###### ANSWER : 

events are actions or occurrences that happen in a web application, such as clicking a button, hovering over an element, or submitting a form. When an event occurs, the browser can trigger a function, known as an event handler, to respond to that event

JAVASCPRIT EVENTS NAME :

1. mouse event
2. keyboard event
3. window event
_____________________________________________


##### QUESTION-2 How does the addEventListener() method work in JavaScript? Provide an example.

 **An example is given in the task folder**

 _______________________________________________

 # DOM Manipulation

 ##### QUESTION-1  What is the DOM (Document Object Model) in JavaScript? How does JavaScript interact with the DOM?

 ###### ANSWER : 

DOM is a programming interface for web documents. It represents the structure of a web page as a tree of nodes, where each node represents a part of the document, such as an element, attribute, or text.

JAVASCPRIT INTERFACES WITH DOM :

document.getElementById('id'): Selects an element by its id attribute.

document.getElementsByClassName('class'): Selects elements by their class attribute.

document.querySelector(): Selects the first matching element based on a CSS selector.

document.querySelectorAll(): Selects all matching elements.
 ____________________________________________________


 ##### QUESTION-2 Explain the methods getElementById(), getElementsByClassName(),and querySelector() used to select elements from the DOM.

 ###### ANSWER : 


 - document.getElementById('id'): 
    Selects an element by its id attribute.


- document.getElementsByClassName('class'): 
    Selects elements by their class attribute.


- document.querySelector(): 
     Selects the first matching element based on a CSS selector.
____________________________________


# JavaScript Timing Events (setTimeout, setInterval)

##### QUESTION-1 Explain the setTimeout() and setInterval() functions in JavaScript. Howare they used for timing events?

###### ANSWER : 

Timing events is you to execute code at specific intervals or after a certain delay. This is achieved using the setTimeout() and setInterval() functions.   

- setTimeout()

setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

- setInterval

setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.

_________________________________________________________________

##### QUESTION-2 Question 2: Provide an example of how to use setTimeout() to delay an action by 2 seconds.

**An example is given in the task folder**
__________________________________________________________

# JavaScript Error Handling

##### QUESTION - 1 What is error handling in JavaScript? Explain the try, catch, and finally blocks with an example.

Error handling in JavaScript is a process to detect and handle errors
 that occurs during the execution of a program


try : encloses code that might throw an error.
catch : executes if an error occurs within the try block.
finally blocks : executes regardless of whether an error occurred. 

try {
  // Code that might throw an error
} catch (error) {
  // Handle the error here
} finally {
  // Code that always executes, regardless of an error
}

________________________

##### QUESTION-2 Why is error handling important in JavaScript applications?

###### ANSWER : 

exception handling is required for building robust, reliable and user friendly applications in JavaScript.

errors can occur due to programming mistakes, incorrect user input, etc.

 Errors can disrupt code execution and lead to bad user experience.

 #### _________________________________________________________
 #### _________________________________________________________









 

        
