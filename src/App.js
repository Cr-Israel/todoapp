import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className='list-container'>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!!value) {
          setTodos([...todos, value]);
          setValue("")
        };
        return;
        }}
      >
        <input
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;