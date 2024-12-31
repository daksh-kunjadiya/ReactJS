import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <h1>Counter</h1>
      <Counter initial={0} />
    </>
  );
};

export default App;
