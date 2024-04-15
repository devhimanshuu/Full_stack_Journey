/* eslint-disable no-unused-vars */
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Chai aur code</h1>
      <p>Jokes :{jokes.length}</p>
      {jokes.map((joke, index) => {
        return (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
