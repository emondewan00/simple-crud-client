import { json } from "react-router-dom";
import "./App.css";

function App() {
  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data); form.reset()})
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={formHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name "
          id="name"
        />{" "}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email "
          id="email"
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
