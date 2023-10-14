// To find whether an object was constructed by a certain constructor or one inheriting from it, you can use the
// instanceof command:
//We want this function to take the sum of the numbers passed to it
//It can be called as sum(1, 2, 3) or sum([1, 2, 3]) and should give 6
function sum(...arguments) {
  if (arguments.length === 1) {
    const [firstArg] = arguments;
    if (firstArg instanceof Array) {
      //firstArg is something like [1, 2, 3]
      return sum(...firstArg); //calls sum(1, 2, 3)
    }
  }
  return arguments.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); //6
console.log(sum([1, 2, 3])); //6
console.log(sum(4)); //4
// Note that primitive values are not considered instances of any class:
console.log(2 instanceof Number); //false
console.log("abc" instanceof String); //false
console.log(true instanceof Boolean); //false
console.log(Symbol() instanceof Symbol); //false
// Every value in JavaScript besides null and undefined also has a constructor property storing the function that was
// used to construct it. This even works with primitives.
//Whereas instanceof also catches instances of subclasses,
//using obj.constructor does not
console.log([] instanceof Object, [] instanceof Array); //true true
console.log([].constructor === Object, [].constructor === Array); //false true
function isNumber(value) {
  //null.constructor and undefined.constructor throw an error when accessed
  if (value === null || value === undefined) return false;
  return value.constructor === Number;
}
console.log(isNumber(null), isNumber(undefined)); //false false
console.log(
  isNumber("abc"),
  isNumber([]),
  isNumber(() => 1)
); //false false false
console.log(isNumber(0), isNumber(Number("10.1")), isNumber(NaN)); //true true true
