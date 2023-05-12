import React from "react";
import { json, useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const data = useLoaderData();

  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    fetch(`http://localhost:5000/user/${data._id}`, {
      method: "PUT",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <h1>Update user details</h1>
      <form onSubmit={formHandler}>
        <input type="text" name="name" id="name" defaultValue={data.name} />
        <br />
        <input type="email" name="email" id="email" defaultValue={data.email} />
        <br />
        <button type="submit">Update user</button>
      </form>
    </>
  );
};

export default UpdateUser;
