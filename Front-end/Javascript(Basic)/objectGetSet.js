/*Treat a property as a combination of two functions, one to get the value from it, and another one to set the value in
 it.
 The get property of the property descriptor is a function that will be called to retrieve the value from the property.
 The set property is also a function, it will be called when the property has been assigned a value, and the new value
 will be passed as an argument.
 You cannot assign a value or writable to a descriptor that has get or set*/

var person = { name: "John", surname: "Doe" };
Object.defineProperty(person, "fullName", {
  get: function () {
    return this.name + " " + this.surname;
  },
  set: function (value) {
    [this.name, this.surname] = value.split(" ");
  },
});
console.log(person.fullName); // -> "John Doe"
person.surname = "Hill";
console.log(person.fullName); // -> "John Hill"
person.fullName = "Mary Jones";
console.log(person.name); // -> "Mary"
