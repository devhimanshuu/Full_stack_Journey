/*Inheritance works just like it does in other object-oriented languages: methods defined on the superclass are
accessible in the extending subclass.
If the subclass declares its own constructor then it must invoke the parents constructor via super() before it can
access this.*/
class SuperClass {
  constructor() {
    this.logger = console.log;
  }
  log() {
    this.logger(`Hello ${this.name}`);
  }
}
class SubClass extends SuperClass {
  constructor() {
    super();
    this.name = "subclass";
  }
}
const subClass = new SubClass();
subClass.log(); // logs: "Hello subclass"
