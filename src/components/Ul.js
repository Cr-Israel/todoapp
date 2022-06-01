import React, { useState } from "react";

function Ul() {
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default Ul;