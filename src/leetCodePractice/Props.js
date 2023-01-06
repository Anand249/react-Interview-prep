import React, { useState } from 'react';
import './index.css';
import PropChild from './PropChild';

export default function Props() {
    const [name, setName] = useState('Anand');
    const changeName = (value) => {
        // setName('Yerni')
        console.log(value)
    };
  return (
    <div className="centerText">
        <PropChild valueOfProps={name} changeName={changeName}/>
        {/* <button onClick={() => setName('Yerni')}>ChnageName</button> */}
    </div>
  )
}
