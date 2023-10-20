function formatDate(dayOfWeek, day, month, year) {
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return daysOfWeek[dayOfWeek] + " " + months[month] + " " + day + " " + year;
}
//Foo lives in a country with timezone GMT + 1
var birthday = new Date(2000, 0, 1);
console.log(
  "Foo was born on: " +
    formatDate(
      birthday.getDay(),
      birthday.getDate(),
      birthday.getMonth(),
      birthday.getFullYear()
    )
);
sendToBar(birthday.getTime());

//Correct Approach

function formatDate(dayOfWeek, day, month, year) {
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return daysOfWeek[dayOfWeek] + " " + months[month] + " " + day + " " + year;
}
//Foo lives in a country with timezone GMT + 1
var birthday = new Date(Date.UTC(2000, 0, 1));
console.log(
  "Foo was born on: " +
    formatDate(
      birthday.getUTCDay(),
      birthday.getUTCDate(),
      birthday.getUTCMonth(),
      birthday.getUTCFullYear()
    )
);
sendToBar(birthday.getTime());
