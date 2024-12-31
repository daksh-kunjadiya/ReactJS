import React from "react";

const Greeting = ({ name }) => {
  const greetingMessage =
    name && name !== "" ? `Hello, ${name}!` : "Welcome to our site";
  return (
    <div>
      <h1>{greetingMessage}</h1>
    </div>
  );
};

export default Greeting;
