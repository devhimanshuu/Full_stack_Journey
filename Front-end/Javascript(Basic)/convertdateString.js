// Convert to String
var date1 = new Date();
date1.toString();
Returns: "Fri Apr 15 2016 07:48:48 GMT-0400 (Eastern Daylight Time)";

// Convert to Time String
var date1 = new Date();
date1.toTimeString();
Returns: "07:48:48 GMT-0400 (Eastern Daylight Time)";

// Convert to Date String
var date1 = new Date();
date1.toDateString();
Returns: "Thu Apr 14 2016";

// Convert to UTC String
var date1 = new Date();
date1.toUTCString();
Returns: "Fri, 15 Apr 2016 11:48:48 GMT";

// Convert to ISO String
var date1 = new Date();
date1.toISOString();
Returns: "2016-04-14T23:49:08.596Z";

// Convert to GMT String
var date1 = new Date();
date1.toGMTString();
Returns: "Thu, 14 Apr 2016 23:49:08 GMT";

// This function has been marked as deprecated so some browsers may not support it in the future. It is suggested to
// use toUTCString() instead.
// Convert to Locale Date String
var date1 = new Date();
date1.toLocaleDateString();
Returns: "4/14/2016";

// This function returns a locale sensitive date string based upon the user's location by default.
date1.toLocaleDateString([locales[options]]);

// can be used to provide specific locales but is browser implementation specific. For example,
date1.toLocaleDateString(["zh", "en-US"]);

// would attempt to print the string in the Chinese locale using United States English as a fallback. The options
// parameter can be used to provide specific formatting. For example:
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
date1.toLocaleDateString([], options);
