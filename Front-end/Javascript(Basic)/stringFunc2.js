// To trim whitespace from the edges of a string, use String.prototype.trim:

" some whitespaced string ".trim(); // "some whitespaced string"

" this is me ".trimStart(); // "this is me "
" this is me ".trimEnd(); // " this is me"

// Non-standard methods, but currently implemented by most engines

" this is me ".trimLeft(); // "this is me "
" this is me ".trimRight(); // " this is me"

// Use .split to go from strings to an array of the split substrings

var s = "one, two, three, four, five";

s.split(", "); // ["one", "two", "three", "four", "five"]

// Use the array method .join to go back to a string:

s.split(", ").join("--"); // "one--two--three--four--five"

// All JavaScript strings are unicode!

var s = "some ∆≈ƒ unicode ¡™£¢¢¢";
s.charCodeAt(5); // 8710
