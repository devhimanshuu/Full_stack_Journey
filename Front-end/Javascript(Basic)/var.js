// Variables are what make up most of JavaScript. These variables make up things from numbers to objects, which are
// all over JavaScript to make one's life much easier.
// Section 2.1: Defining a Variable
var myVariable = "This is a variable!";
// This is an example of defining variables. This variable is called a "string" because it has ASCII characters (A-Z, 0-9,
// !@#$, etc.)

var number1 = 5;
number1 = 3;
// Here, we defined a number called "number1" which was equal to 5. However, on the second line, we changed the
// value to 3. To show the value of a variable, we log it to the console or use window.alert():
console.log(number1); // 3
window.alert(number1); // 3
// To add, subtract, multiply, divide, etc., we do like so:
number1 = number1 + 5; // 3 + 5 = 8
number1 = number1 - 6; // 8 - 6 = 2
var number2 = number1 * 10; // 2 (times) 10 = 20
var number3 = number2 / number1; // 20 (divided by) 2 = 10;
// We can also add strings which will concatenate them, or put them together. For example:
var myString = "I am a " + "string!"; // "I am a string!"
