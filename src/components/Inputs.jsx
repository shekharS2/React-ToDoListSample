import React, { useState } from 'react';

import './Inputs.css'

function Inputs(props) {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        let inp = e.target.value;
        setInput(inp);
    }

    const handleFormSubmit = (e) => {
        if(input !== ""){
            e.preventDefault();
            props.handleSubmit(input);
            setInput("");
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='input-container'>
                <input className='inputText' value={input} onChange={handleInputChange} />
                <button className='add-task-btn'>ADD TASK</button>
            </div>
        </form>
    );
}

export default Inputs