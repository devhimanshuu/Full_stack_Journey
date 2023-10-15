function reverseString(str) {
  return [...String(str)].reverse().join("");
}
console.log(reverseString("stackoverflow")); // "wolfrevokcats"
console.log(reverseString(1337)); // "7331"
console.log(reverseString([1, 2, 3])); // "3,2,1"
//    Custom reverse() function
function reverse(string) {
  var strRev = "";
  for (var i = string.length - 1; i >= 0; i--) {
    strRev += string[i];
  }
  return strRev;
}
reverse("zebra"); // "arbez"
