// Use .slice() to extract substrings given two indices:

var s = "0123456789abcdefg";
s.slice(0, 5); // "01234"
s.slice(5, 6); // "5"

// Given one index, it will take from that index to the end of the string:

s.slice(10); // "abcdefg"

// The method charCodeAt retrieves the Unicode character code of a single character:

var charCode = "µ".charCodeAt(); // The character code of the letter µ is 181

// To get the character code of a character in a string, the 0-based position of the character is passed as a parameter
// to charCodeAt:

var charCode = "ABCDE".charCodeAt(3); // The character code of "D" is 68
