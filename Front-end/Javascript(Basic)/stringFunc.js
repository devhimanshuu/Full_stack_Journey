// Use charAt() to get a character at the specified index in the string.

var string = "Hello, World!";
console.log(string.charAt(4)); // "o"

// Alternatively, because strings can be treated like arrays, use the index via bracket notation.

var string = "Hello, World!";
console.log(string[4]); // "o"

// To get the character code of the character at a specified index, use charCodeAt().

var string = "Hello, World!";
console.log(string.charCodeAt(4)); // 111

// Say you have a <textarea> and you want to retrieve info about the number of:
// Characters (total)
// Characters (no spaces)
// Words
// Lines

function wordCount(val) {
  var wom = val.match(/\S+/g);
  return {
    charactersNoSpaces: val.replace(/\s+/g, "").length,
    characters: val.length,
    words: wom ? wom.length : 0,
    lines: val.split(/\r*\n/).length,
  };
}
// Use like:

wordCount(someMultilineText).words; // (Number of words)
