import React, { useState } from "react";

import Form from "./components/Form";
import Ul from "./components/Ul";

import "./App.css";


const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className='list-container'>
      <Form />
      <Ul />
    </div>
  );
};

export default App;