// To detect whether a parameter is a primitive string, use typeof:

var aString = "my string";
var anInt = 5;
var anObj = {};
typeof aString === "string"; // true
typeof anInt === "string"; // false
typeof anObj === "string"; // false

// If you ever have a String object, via new String("somestr"), then the above will not work. In this instance, we can
// use instanceof:

var aStringObj = new String("my string");
aStringObj instanceof String; // true

// To cover both instances, we can write a simple helper function:

var isString = function (value) {
  return typeof value === "string" || value instanceof String;
};
var aString = "Primitive String";
var aStringObj = new String("String Object");
isString(aString); // true
isString(aStringObj); // true
isString({}); // false
isString(5); // false

// Or we can make use of toString function of Object. This can be useful if we have to check for other types as well
// say in a switch statement, as this method supports other datatypes as well just like typeof.

var pString = "Primitive String";
var oString = new String("Object Form of String");
Object.prototype.toString.call(pString); //"[object String]"
Object.prototype.toString.call(oString); //"[object String]"
