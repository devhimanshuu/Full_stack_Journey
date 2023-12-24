// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
//  objects to a target object. It will return the target object.
//  Use it to assign values to an existing object:

var user = {
  firstName: "John",
};
Object.assign(user, { lastName: "Doe", age: 39 });
console.log(user); // Logs: {firstName: "John", lastName: "Doe", age: 39}

//  Or to create a shallow copy of an object:

var obj = Object.assign({}, user);
console.log(obj); // Logs: {firstName: "John", lastName: "Doe", age: 39}

//  Or merge many properties from multiple objects to one:

var obj1 = {
  a: 1,
};
var obj2 = {
  b: 2,
};
var obj3 = {
  c: 3,
};
var obj = Object.assign(obj1, obj2, obj3);
console.log(obj); // Logs: { a: 1, b: 2, c: 3 }
console.log(obj1); // Logs: { a: 1, b: 2, c: 3 }, target object itself is changed

//  Primitives will be wrapped, null and undefined will be ignored:

var var_1 = "abc";
var var_2 = true;
var var_3 = 10;
var var_4 = Symbol("foo");
var obj = Object.assign({}, var_1, null, var_2, undefined, var_3, var_4);
console.log(obj); // Logs: { "0": "a", "1": "b", "2": "c" }

//  Note, only string wrappers can have own enumerable properties
//  Use it as reducer: (merges an array to an object)

return users.reduce((result, user) => Object.assign({}, { [user.id]: user }));
