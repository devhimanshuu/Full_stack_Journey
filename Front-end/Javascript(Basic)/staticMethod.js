/*Static methods and properties are defined on the class/constructor itself, not on instance objects. These are specified
in a class definition by using the static keyword.*/
class MyClass {
  static myStaticMethod() {
    return "Hello";
  }
  static get myStaticProperty() {
    return "Goodbye";
  }
}
console.log(MyClass.myStaticMethod()); // logs: "Hello"
console.log(MyClass.myStaticProperty); // logs: "Goodbye"

// We can see that static properties are not defined on object instances:
const myClassInstance = new MyClass();
console.log(myClassInstance.myStaticProperty); // logs: undefined

// However, they are defined on subclasses:
class MySubClass extends MyClass {}
console.log(MySubClass.myStaticMethod()); // logs: "Hello"
console.log(MySubClass.myStaticProperty); // logs: "Goodbye"
