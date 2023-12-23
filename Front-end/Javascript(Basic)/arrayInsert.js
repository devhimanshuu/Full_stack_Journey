// Simple item insertion can be done with Array.prototype.splice method:
arr.splice(index, 0, item);
//  More advanced variant with multiple arguments and chaining support:
/* Syntax:
   array.insert(index, value1, value2, ..., valueN) */
Array.prototype.insert = function (index) {
  this.splice.apply(
    this,
    [index, 0].concat(Array.prototype.slice.call(arguments, 1))
  );
  return this;
};
["a", "b", "c", "d"].insert(2, "X", "Y", "Z").slice(1, 6); // ["b", "X", "Y", "Z", "c"]
//  And with array-type arguments merging and chaining support:
/* Syntax:
   array.insert(index, value1, value2, ..., valueN) */
Array.prototype.insert = function (index) {
  index = Math.min(index, this.length);
  arguments.length > 1 &&
    this.splice.apply(this, [index, 0].concat([].pop.call(arguments))) &&
    this.insert.apply(this, arguments);
  return this;
};
["a", "b", "c", "d"].insert(2, "V", ["W", "X", "Y"], "Z").join("-"); // "a-b-V-W-X-Y-Z-c-d"
