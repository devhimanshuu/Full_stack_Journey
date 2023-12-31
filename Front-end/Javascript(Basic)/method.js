// Methods can be defined in classes to perform a function and optionally return a result.
// They can receive arguments from the caller.
class Something {
  constructor(data) {
    this.data = data;
  }
  doSomething(text) {
    return {
      data: this.data,
      text,
    };
  }
}
var s = new Something({});
s.doSomething("hi"); // returns: { data: {}, text: "hi" }
