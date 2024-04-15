import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready ");
});

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "a joke",
      content: "this is a joke",
    },
    {
      id: 2,
      title: "2nd joke",
      content: "this is 2nd joke",
    },
    {
      id: 3,
      title: " 3rd joke",
      content: "this is 3rd joke",
    },
    {
      id: 4,
      title: "forth joke",
      content: "this is forth joke",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at https://localhost:${port}`);
});
