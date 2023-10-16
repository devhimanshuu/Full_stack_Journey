// The .indexOf method returns the index of a substring inside another string (if exists, or -1 if otherwise)

"Hellow World".indexOf("Wor"); // 7

// .indexOf also accepts an additional numeric argument that indicates on what index should the function start
looking;

"harr dee harr dee harr".indexOf("dee", 10); // 14

// You should note that .indexOf is case sensitive

"Hellow World".indexOf("WOR"); // -1

console.log("qwerty".toUpperCase()); // 'QWERTY'

String.prototype.toLowerCase();
console.log("QWERTY".toLowerCase()); // 'qwerty'

// This can be done using the .repeat() method:

"abc".repeat(3); // Returns "abcabcabc"
"abc".repeat(0); // Returns ""
"abc".repeat(-1); // Throws a RangeError

// In the general case, this should be done using a correct polyfill for the ES6 String.prototype.repeat() method.
// Otherwise, the idiom new Array(n + 1).join(myString) can repeat n times the string myString:

var myString = "abc";
var n = 3;
new Array(n + 1).join(myString); // Returns "abcabcabc
