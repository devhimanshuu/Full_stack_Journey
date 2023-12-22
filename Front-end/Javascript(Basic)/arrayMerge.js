// When we have two separate array and we want to make key value pair from that two array, we can use array's
// reduce function like below:

var columns = ["Date", "Number", "Size", "Location", "Age"];
var rows = ["2001", "5", "Big", "Sydney", "25"];
var result = rows.reduce(function (result, field, index) {
  result[columns[index]] = field;
  return result;
}, {});
console.log(result);

// Output:
// {
//  Date: "2001",
//  Number: "5",
//  Size: "Big",
//  Location: "Sydney",
//  Age: "25"
// }
