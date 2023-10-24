// ternary operator in javascript

var animal = "kitty";
var result = animal === "kitty" ? "cute" : "still nice";

// In this case, result gets the 'cute' value, because the value of animal is 'kitty'. If animal had another value, result
// would get the 'still nice' value.
// Compare this to what the code would like with if/else conditions.
var animal = "kitty";
var result = "";
if (animal === "kitty") {
  result = "cute";
} else {
  result = "still nice";
}

//Switch statement in javascript
// The last case is the default case. This one will run if no other matches were made.

var animal = "Lion";
switch (animal) {
  case "Dog":
    console.log('I will not run since animal !== "Dog"');
    break;
  case "Cat":
    console.log('I will not run since animal !== "Cat"');
    break;
  default:
    console.log("I will run since animal does not match any other case");
}
