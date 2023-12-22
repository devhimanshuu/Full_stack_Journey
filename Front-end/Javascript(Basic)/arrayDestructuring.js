// An array can be destructured when being assigned to a new variable.
const triangle = [3, 4, 5];
const [length, height, hypotenuse] = triangle;
length === 3; // → true
height === 4; // → true
hypotneuse === 5; // → true
// Elements can be skipped
const [, b, , c] = [1, 2, 3, 4];
console.log(b, c); // → 2, 4
// Rest operator can be used too
const [b, c, ...xs] = [2, 3, 4, 5];
console.log(b, c, xs); // → 2, 3, [4, 5]
// An array can also be destructured if it's an argument to a function.
function area([length, height]) {
  return (length * height) / 2;
}

const triangle = [3, 4, 5];
area(triangle); // → 6
// Notice the third argument is not named in the function because it's not needed.
// Learn more about destructuring syntax.
