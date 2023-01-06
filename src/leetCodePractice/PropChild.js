import React from 'react'

export default function PropChild({
    valueOfProps, changeName
}) {
    return (
        <div className='centerText'>
            <h1>{valueOfProps}</h1>
            <button onClick={() => changeName("Anand Here")}>
                Change Name
            </button>
        </div>
    )
}
