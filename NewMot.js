import { useState } from "react";
import axios from "axios";

function NewMot() {
  const [msg, setMsg] = useState("");
  const [author, setAuthor] = useState("");

  const fetchMessage = () => {
    const url = "https://api.quotable.io/random";
    axios
      .get(url)
      .then((res) => {
        setMsg(res.data.content);
        setAuthor(res.data.author);
      })
      .catch((err) => setMsg("issue: " + err));
  };

  return (
    <center>
      <h1>New Motivational Message App</h1>
      <h2>{msg}</h2>
      <h2>{author}</h2>
      <button onClick={fetchMessage}>Next</button>
    </center>
  );
}

export default NewMot;

