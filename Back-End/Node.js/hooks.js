app.use(function (req, res, next) {
  function afterResponse() {
    res.removeListener("finish", afterResponse);
    res.removeListener("close", afterResponse);
    // actions after response
  }
  res.on("finish", afterResponse);
  res.on("close", afterResponse);
  // action before request
  // eventually calling `next()`
  next();
});

app.use(app.router);
