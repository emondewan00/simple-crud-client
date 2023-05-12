import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  const deleteHandler = (_id) => {
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted successfully");
        }
      });
  };

  // const editUserHandler = (_id) => {

  // };

  return (
    <div>
      <h1>user list </h1>
      <ul>
        {data?.map((user) => (
          <li key={user._id}>
            {user.email} <Link to={`/users/${user._id}`}>Update User</Link>
            <button onClick={() => deleteHandler(user._id)}>x</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
