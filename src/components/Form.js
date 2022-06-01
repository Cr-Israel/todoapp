import React, { useState } from "react";

function Form() {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <div>
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
        </div>
    );
};

export default Form;