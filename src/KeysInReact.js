import React from 'react'

export default function KeysInReact() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const details = [
        {
            name: 'Anand',
            age: 31,
        },
        {
            name: 'Yerni',
            age: 30,
        },
        {
            name: 'Kusu',
            age: 34,
        },
        {
            name: 'Madhuri',
            age: 37,
        },
    ]
    return (
        <div className="centerText">
            <h1>Handeling Keys In React</h1>
            {/* <ul>
                {details.map((value) => {
                   return <li key={value.age}><h2>{value.name}-{value.age}</h2></li>
                })}
            </ul> */}
            <ul>
                {details.map((value, index) => {
                   return <li key={index}><h2>{value.name}-{value.age}</h2></li>
                })}
            </ul>
        </div>
    )
}
