// In practice you might need to narrow it down to what sort of 'object' it actually is and one way to do it is to use
// object constructor name to get what flavour of object it actually is: Object.prototype.toString.call(yourObject)
// 1. String
Object.prototype.toString.call("String");

// 2. Number
Object.prototype.toString.call(42);

// 3. Bool
Object.prototype.toString.call(true);

// 4. Object
Object.prototype.toString.call(Object());
Object.prototype.toString.call({});

// 5. Function
Object.prototype.toString.call(function () {});

// 6. Date
Object.prototype.toString.call(new Date(2015, 10, 21));

// 7. Regex
Object.prototype.toString.call(new RegExp());
Object.prototype.toString.call(/foo/);

// 8. Array
Object.prototype.toString.call([]);

// 9. Null
Object.prototype.toString.call(null);

// 10. Undefined
Object.prototype.toString.call(undefined);

// 11. Error
Object.prototype.toString.call(Error());
