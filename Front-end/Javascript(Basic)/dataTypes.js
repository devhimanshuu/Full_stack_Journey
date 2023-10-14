// typeof is the 'official' function that one uses to get the type in JavaScript, however in certain cases it might yield
// some unexpected results ...
// 1. Strings
typeof "String";
typeof Date("2011,01,01");
("string");
// 2. Numbers
typeof 42;
("number");
// 3. Bool
typeof true();
("boolean");
// 4. Object
typeof {};
typeof [];
typeof null;
typeof /aaa/;
typeof Error();
("object");
// 5. Function
typeof function () {};
("function");
// 6. Undefined
var var1;
typeof var1;
("undefined");
