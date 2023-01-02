import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import StateInClass from "./stateInClass";
import Props from "./Props";
import InLineConditionExpression from "./InLineConditionExpression";
import EventHandeling from "./EventHandeling";
import KeysInReact from "./KeysInReact";
import FormsInReact from "./FormsInReact";
import DynamicInput from "./DynamicInput";
import StyleInReact from "./StyleInReact";
import UncontrolledAndControlled from "./UncontrolledAndControlled";
import InnerHtmlInReact from "./InnerHtmlInReact";
import ApiRequestsInReact from "./ApiRequestsInReact";
import ShowHide from "./ShowHide";
import ReduceMethod from "./ReduceMethod";
import Login from "./login";
import UserPhotosAndDetails from "./userPhotosAndDetails";

function MyApp() {
    const [users, setUsers] = useState([]);
    const [feedData, setFeedData] = useState([]);
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [isDataFiltered, setIsDataFiltered] = useState(false)
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => response.json())
    //         .then((json) => {setUsers(json)})
    // }, []);
    // feedData.push(users);

    // const mapDAta = () => {
    //     let mappedArray = users.map((user) => user.id * 2);
    //     console.log(mappedArray)
    // }

    const mapDAta = () => {
        let modifiedArray = users.filter((user) => {
            return user.id <= 5;
        });
        setUsers(modifiedArray);
    }

    const newarray = () => {
        let filterArray = numbers.filter((number) => {
            return number <= 5
        }).map((filterdArray) => {
            return filterdArray * filterdArray;
        });
        setNumbers(filterArray);
    }

    const filterData = () => {
        setIsDataFiltered(!isDataFiltered);
        if (isDataFiltered) {

        }
            let newArray = users.filter((value) => {
                return value.id > 6
            });
            setUsers(newArray);
        // {isDataFiltered ? setFeedData(newArray) : setFeedData(users)}
        console.log('feedData', feedData)
    }

    return (
        <div>
            {/* {
                users.map((value) => {
                    return (
                        <div className='card'>
                            <h3>{value.name}</h3>
                        </div>
                    )
                })
            }
            <div>
                <button onClick={filterData}>{isDataFiltered ? 'Click for UnFiltered Result' : 'Click for Filtered Result'}</button>
            </div> */}
            {/* <ShowHide /> */}
            {/* <ReduceMethod /> */}
            {/* <Login /> */}
            <UserPhotosAndDetails />

            {/* <App /> */}
            {/* <StateInClass /> */}
            {/* <Props /> */}
            {/* <InLineConditionExpression /> */}
            {/* <EventHandeling /> */}
            {/* <KeysInReact /> */}
            {/* <FormsInReact /> */}
            {/* <DynamicInput /> */}
            {/* <StyleInReact /> */}
            {/* <UncontrolledAndControlled /> */}
            {/* <InnerHtmlInReact /> */}
            {/* <ApiRequestsInReact /> */}
            {/* <h3>User Details</h3>
            {users.map((user) => (
                <div className='card'>
                    <div>
                        <p className='card-inner'>{user.name}</p>
                        <p className='card-inner'>{user.id}</p>
                    </div>
                </div>
            ))}
            <div>
                <button onClick={mapDAta}>See Mapped Array</button>
            </div>
            {numbers.map((number) => (
                <div className='card'>
                    <div>
                        <p className='card-inner'>{number}</p>
                    </div>
                </div>
            ))}
            <div>
                <button onClick={newarray}>See Mapped Array</button>
            </div> */}
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById("root"))