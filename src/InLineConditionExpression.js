import React from 'react'

//Ternary or incline conditional operator

export default function InLineConditionExpression() {
    let age = 31;
    let name = 'Anand';

    // age > 30 ? console.log('You are old now') :
    //     name === 'Anand' && age === 30 ? (<>{console.log('I am 30 Years old')}{console.log('Anand is my Name')}</>) :
    //         (<>{console.log('I am not Anand')}{console.log('I am less then 30 years old')}</>)


    return (
        <div className='centerText'>
            {
                age > 30 ? <h1>You are old now</h1> :
                    name === 'Anand' && age === 30 ? <><h1>I am 30 Years old</h1><h1>Anand is my Name</h1></> :
                        <><h1>I am not Anand</h1><h1>I am less then 30 years old</h1></>
            }
        </div>
    )
}
