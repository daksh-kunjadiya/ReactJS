import React from "react";

const Usercard = ({ id, username, email, number, password, ondelete }) => {
  const handleDelete = () => {
    ondelete(id);
  };

  return (
    <div>
      <p>NAME: {username}</p>
      <p>EMAIL: {email}</p>
      <p>NUMBER: {number}</p>
      <p>PASSWORD: {password}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default Usercard;
