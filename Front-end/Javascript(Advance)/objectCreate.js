/*With ES5 +, the Object.create() function can be used to create an Object with any other Object as it's prototype.*/

const anyObj = {
  hello() {
    console.log(`this.foo is ${this.foo}`);
  },
};
let objWithProto = Object.create(anyObj);
objWithProto.foo = "bar";
objWithProto.hello(); // "this.foo is bar"

/*To explicitly create an Object without a prototype, use null as the prototype. This means the Object will not inherit
   from Object.prototype either and is useful for Objects used for existence checking dictionaries, e.g.*/
let objInheritingObject = {};
let objInheritingNull = Object.create(null);
"toString" in objInheritingObject; // true
"toString" in objInheritingNull; // false

//  From ES6, the prototype of an existing Object can be changed using Object.setPrototypeOf, for example
let obj = Object.create({ foo: "foo" });
obj = Object.setPrototypeOf(obj, { bar: "bar" });
obj.foo; // undefined
obj.bar; // "bar"

//  This can be done almost anywhere, including on a this object or in a constructor.
