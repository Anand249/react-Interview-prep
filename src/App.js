import React, { useState } from "react";
import './index.css';
export default function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')
    const [isVisible, setIsVisisble] = useState(false);
    const [array, setArray] = useState([
        {
            name: 'Anand',
            age: 30
        },
        {
            name: 'Yerni',
            age: 30
        }
    ])
    const [obj, setObj] = useState({});
    const increaemnt = () => {
        setCount(count + 1);
        setIsVisisble(!isVisible);
        setName('Anand');
    };
    return (
        <div className="centerText">
            <h3>{count}</h3>
            <h1>{name}</h1>
            {isVisible ? <h1>It is Visibel</h1> : <h1>It is not Visibel</h1>}
            <button onClick={increaemnt}>Increament the count</button>
        </div>
    )
}
