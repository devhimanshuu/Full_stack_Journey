module.exports = reqFilter = (req, resp, next) => {
  if (req.query.age) {
    resp.send("Please provide age");
  } else if (req.query.age < 18) {
    resp.send("you dont have access to the content");
  } else {
    next();
  }
};
