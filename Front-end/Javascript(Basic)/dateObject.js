// Creates a Date object with the current date and time from the
// user's browser
var now = new Date();
now.toString() === "Mon Apr 11 2016 16:10:41 GMT-0500 (Central Daylight Time)";
// true

// well, at the time of this writing, anyway
// Creates a Date object at the Unix Epoch (i.e., '1970-01-01T00:00:00.000Z')
var epoch = new Date(0);
epoch.toISOString() === "1970-01-01T00:00:00.000Z"; // true

// Creates a Date object with the date and time 2,012 milliseconds
// after the Unix Epoch (i.e., '1970-01-01T00:00:02.012Z').
var ms = new Date(2012);
date2012.toISOString() === "1970-01-01T00:00:02.012Z"; // true

// Creates a Date object with the first day of February of the year 2012
// in the local timezone.
var one = new Date(2012, 1);
one.toString() === "Wed Feb 01 2012 00:00:00 GMT-0600 (Central Standard Time)";
// true

// Creates a Date object with the first day of the year 2012 in the local
// timezone.
// (Months are zero-based)
var zero = new Date(2012, 0);
zero.toString() === "Sun Jan 01 2012 00:00:00 GMT-0600 (Central Standard Time)";
// true

// Creates a Date object with the first day of the year 2012, in UTC.
var utc = new Date(Date.UTC(2012, 0));
utc.toString() === "Sat Dec 31 2011 18:00:00 GMT-0600 (Central Standard Time)";
// true
utc.toISOString() === "2012-01-01T00:00:00.000Z";
// true

// Parses a string into a Date object (ISO 8601 format added in ECMAScript 5.1)
// Implementations should assumed UTC because of ISO 8601 format and Z designation
var iso = new Date("2012-01-01T00:00:00.000Z");
iso.toISOString() === "2012-01-01T00:00:00.000Z"; // true

// Parses a string into a Date object (RFC in JavaScript 1.0)
var local = new Date("Sun, 01 Jan 2012 00:00:00 -0600");
local.toString() ===
  "Sun Jan 01 2012 00:00:00 GMT-0600 (Central Standard Time)";
// true

// Parses a string in no particular format, most of the time. Note that parsing
// logic in these cases is very implementation-dependent, and therefore can vary
// across browsers and versions.
var anything = new Date("11/12/2012");
anything.toString() ===
  "Mon Nov 12 2012 00:00:00 GMT-0600 (Central Standard Time)";

// true, in Chrome 49 64-bit on Windows 10 in the en-US locale. Other versions in
// other locales may get a different result.
// Rolls values outside of a specified range to the next value.
var rollover = new Date(2012, 12, 32, 25, 62, 62, 1023);
rollover.toString() ===
  "Sat Feb 02 2013 02:03:03 GMT-0600 (Central Standard Time)";
// true; note that the month rolled over to Feb; first the month rolled over to
// Jan based on the month 12 (11 being December), then again because of the day 32
// (January having 31 days).

// Special dates for years in the range 0-99
var special1 = new Date(12, 0);
special1.toString() ===
  "Mon Jan 01 1912 00:00:00 GMT-0600 (Central Standard Time)";
// true

// If you actually wanted to set the year to the year 12 CE, you'd need to use the
// setFullYear() method:
special1.setFullYear(12);
special1.toString() ===
  "Sun Jan 01 12 00:00:00 GMT-0600 (Central Standard Time)"; // true
