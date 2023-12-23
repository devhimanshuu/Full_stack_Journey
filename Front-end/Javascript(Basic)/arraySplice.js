// The splice()method can be used to remove elements from an array. In this example, we remove the first 3 from
// the array.

var values = [1, 2, 3, 4, 5, 3];
var i = values.indexOf(3);
if (i >= 0) {
  values.splice(i, 1);
}

// [1, 2, 4, 5, 3]
// The splice() method can also be used to add elements to an array. In this example, we will insert the numbers 6,
// 7, and 8 to the end of the array.

var values = [1, 2, 4, 5, 3];
var i = values.length + 1;
values.splice(i, 0, 6, 7, 8);

//[1, 2, 4, 5, 3, 6, 7, 8]
/*The first argument of the splice() method is the index at which to remove/insert elements. The second argument
is the number of elements to remove. The third argument and onwards are the values to insert into the array.*/
