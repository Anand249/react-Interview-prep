import React, { useState } from 'react'

export default function EventHandeling() {
    const [value, setValue] = useState(0);
    // const [val, setVal] = useState(0);
    const addNumbers = (value1, value2) => {
        setValue(value2 + value1)
    }
    const inputFieldValue = (event) => {
       console.log(event.target.name)

    }
    return (
        <div className="centerText">
            <h1>Event Handeling -- {value}</h1>
            <input onChange={inputFieldValue} placeholder="Add Something" name='input'/>
            <button onClick={() => addNumbers(2, 5)}>Add Number</button>
        </div>
    )
}
