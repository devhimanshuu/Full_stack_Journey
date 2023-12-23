// The recommended way (Since ES5) is to use Array.prototype.find:
let people = [{ name: "bob" }, { name: "john" }];
let bob1 = people.find((person) => person.name === "bob");

// Or, more verbose
let bob = people.find(function (person) {
  return person.name === "bob";
});
// In any version of JavaScript, a standard for loop can be used as well:

for (var i = 0; i < people.length; i++) {
  if (people[i].name === "bob") {
    break; // we found bob
  }
}
FindIndex;
// The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing
// function. Otherwise -1 is returned.
array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
var index = array.findIndex((item) => item.value === 3); // 2
var index = array.findIndex((item) => item.value === 12); // -1
