import React from 'react';

const person = (props) => {
    // wrap JavaScript in "{}" for dynamic content
    return <p>My name is {props.name} and I am {props.age}  years old</p>
}

export default person;