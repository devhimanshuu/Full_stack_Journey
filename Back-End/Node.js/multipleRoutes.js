app.get("/api", function (req, res, next) {
  // Both /api/foo and /api/bar will run this
  lookupMember(function (err, member) {
    if (err) return next(err);
    req.member = member;
    next();
  });
});
app.get("/api/foo", function (req, res, next) {
  // Only /api/foo will run this
  doSomethingWithMember(req.member);
});
app.get("/api/bar", function (req, res, next) {
  // Only /api/bar will run this
  doSomethingDifferentWithMember(req.member);
});
