// Single line Comment
// Everything after the until the end of the line is excluded from execution.
function elementAt(event) {
  // Gets the element from Event coordinates
  return document.elementFromPoint(event.clientX, event.clientY);
}

// Multi-line Comment /**/
// Everything between the opening /* and the closing */ is excluded from execution, even if the opening and closing
// are on different lines.
/*
 Gets the element from Event coordinates.
 Use like:
 var clickedEl = someEl.addEventListener("click", elementAt, false);
*/
function elementAt(event) {
  return document.elementFromPoint(event.clientX, event.clientY);
}
