import React, { useState } from 'react'

export default function FormsInReact() {
    const [objData, setObjData] = useState({});
    const getInput = (value, name) => {
        let data = { [name]: value }
        setObjData({ ...objData, ...data })
    }

    const submitData = (event) => {
        event.preventDefault();
        console.log(objData)
    }

    return (
        <form onSubmit={submitData}>
            <div className='centerText'>
                <input onChange={(event) => getInput(event.target.value, event.target.name)} placeholder='Write your name' type='text' name='name' />
                <input onChange={(event) => getInput(event.target.value, event.target.name)} placeholder='Write your Age' type='number' name='age' />
                <input onChange={(event) => getInput(event.target.value, event.target.name)} placeholder='Write your Hobbies' type='text' name='hobies' />
                <input onChange={(event) => getInput(event.target.value, event.target.name)} placeholder='Write a date' type='date' name='date' />
                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
            </div>
        </form>
    )
}
