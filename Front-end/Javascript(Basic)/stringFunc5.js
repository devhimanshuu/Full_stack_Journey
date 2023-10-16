// To search for a string inside a string, there are several functions:

indexOf(searchString), lastIndexOf(searchString);

// indexOf() will return the index of the first occurrence of searchString in the string. If searchString is not found,
// then -1 is returned.

var string = "Hello, World!";
console.log(string.indexOf("o")); // 4
console.log(string.indexOf("foo")); // -1

// Similarly, lastIndexOf() will return the index of the last occurrence of searchstring or -1 if not found.

var string = "Hello, World!";
console.log(string.lastIndexOf("o")); // 8
console.log(string.lastIndexOf("foo")); // -1
includes(searchString, start);

// includes() will return a boolean that tells whether searchString exists in the string, starting from index start
// (defaults to 0). This is better than indexOf() if you simply need to test for existence of a substring.

var string = "Hello, World!";
console.log(string.includes("Hello")); // true
console.log(string.includes("foo")); // fals
