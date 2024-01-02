var Human = function () {
  this.canSpeak = true;
};

// Basic greet function which will greet based on the canSpeak flag
Human.prototype.greet = function () {
  if (this.canSpeak) {
    console.log("Hi, I am " + this.name);
  }
};

var Student = function (name, title) {
  Human.call(this); // Instantiating the Human object and getting the memebers of the class
  this.name = name; // inheriting the name from the human class
  this.title = title; // getting the title from the called function
};

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.greet = function () {
  if (this.canSpeak) {
    console.log("Hi, I am " + this.name + ", the " + this.title);
  }
};

var Customer = function (name) {
  Human.call(this); // inheriting from the base class
  this.name = name;
};
Customer.prototype = Object.create(Human.prototype); // creating the object
Customer.prototype.constructor = Customer;
var bill = new Student("Billy", "Teacher");
var carter = new Customer("Carter");
var andy = new Student("Andy", "Bill");
var virat = new Customer("Virat");
bill.greet();
// Hi, I am Bob, the Teacher
carter.greet();
// Hi, I am Carter
andy.greet();
// Hi, I am Andy, the Bill
virat.greet();
