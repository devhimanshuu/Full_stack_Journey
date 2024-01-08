const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));
