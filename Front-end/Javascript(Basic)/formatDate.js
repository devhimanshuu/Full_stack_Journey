var DateObject = (function () {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = function (str) {
    this.set(str);
  };
  date.prototype = {
    set: function (str) {
      var dateDef = str ? new Date(str) : new Date();
      this.day = dateDef.getDate();
      this.dayPadded = this.day < 10 ? "0" + this.day : "" + this.day;
      this.month = dateDef.getMonth() + 1;
      this.monthPadded = this.month < 10 ? "0" + this.month : "" + this.month;
      this.monthName = monthNames[this.month - 1];
      this.year = dateDef.getFullYear();
    },
    get: function (properties, separator) {
      var separator = separator ? separator : "-";
      ret = [];
      for (var i in properties) {
        ret.push(this[properties[i]]);
      }
      return ret.join(separator);
    },
  };
  return date;
})();
