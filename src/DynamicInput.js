import React, { useState } from 'react';
import './index.css'

export default function DynamicInput() {
    const [objValue, setObjValue] = useState({});

    const getInputValues = (data) => {
        let { name, value} = data.target;
        let input = { [name]: value};
        setObjValue({...objValue, ...input})
    };
    console.log(objValue)
    return (
        <div>
            <div className='card'>
                <div className='card-inner'>
                    <input placeholder='Name' name='name' onChange={getInputValues}/>
                    <input placeholder='Age' name='age' onChange={getInputValues}/>
                    <input placeholder='Years of Experience' name='yoe' onChange={getInputValues}/>
                </div>
            </div>
            <button>Add New Group</button>
        </div>
    )
}
