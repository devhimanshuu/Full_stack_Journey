// Strings in JavaScript can be enclosed in Single quotes 'hello', Double quotes "Hello" and (from ES2015, ES6) in
// Template Literals (backticks) `hello`.
var hello = "Hello";
var world = "world";
var helloW = `Hello World`; // ES2015 / ES6
// Strings can be created from other types using the String() function.
var intString = String(32); // "32"
var booleanString = String(true); // "true"
var nullString = String(null); // "null"
// Or, toString() can be used to convert Numbers, Booleans or Objects to Strings.
var intString = (5232).toString(); // "5232"
var booleanString = false.toString(); // "false"
var objString = {}.toString(); // "[object Object]"
// Strings also can be created by using String.fromCharCode method.
String.fromCharCode(104, 101, 108, 108, 111); //"hello"
// Creating a String object using new keyword is allowed, but is not recommended as it behaves like Objects unlike
// primitive strings.
var objectString = new String("Yes, I am a String object");
typeof objectString; //"object"
typeof objectString.valueOf(); //"string"
// Concatenating Strings
// String concatenation can be done with the + concatenation operator, or with the built-in concat() method on the
// String object prototype.
var foo = "Foo";
var bar = "Bar";
console.log(foo + bar); // => "FooBar"
console.log(foo + " " + bar); // => "Foo Bar"
foo.concat(bar); // => "FooBar"
"a".concat("b", " ", "d"); // => "ab d"
// Strings can be concatenated with non-string variables but will type-convert the non-string variables into strings.
var string = "string";
var number = 32;
var boolean = true;
console.log(string + number + boolean); // "string32true"
// String Templates

// Strings can be created using template literals (backticks) `hello`.
var greeting = `Hello`;
// With template literals, you can do string interpolation using ${variable} inside template literals:
var place = `World`;
var greet = `Hello ${place}!`;
console.log(greet); // "Hello World!"
// You can use String.raw to get backslashes to be in the string without modification.
`a\\b`; // = a\b
String.raw`a\\b`; // = a\\b
