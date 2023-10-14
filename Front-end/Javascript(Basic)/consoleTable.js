// In most environments, console.table() can be used to display objects and arrays in a tabular format.

var personArr = [
  {
    personId: 123,
    name: "Jhon",
    city: "Melbourne",
    phoneNo: "1234567890",
  },
  {
    personId: 124,
    name: "Amelia",
    city: "Sydney",
    phoneNo: "1234567890",
  },
  {
    personId: 125,
    name: "Emily",
    city: "Perth",
    phoneNo: "1234567890",
  },
  {
    personId: 126,
    name: "Abraham",
    city: "Perth",
    phoneNo: "1234567890",
  },
];
console.table(personArr, ["name", "personId"]);
