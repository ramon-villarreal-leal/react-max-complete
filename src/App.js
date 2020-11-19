import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Ramon', age: 28 },
            { name: 'Laura', age: 26 },
            { name: 'Elaine', age: 56 }
        ],
        otherState: 'some other value'
    });

    const [otherState, setOtherState] = useState('some other value wooo');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        console.log('was clicked');
        // DONT DO THIS" personsState.persons[0].name = 'Peter';
        setPersonsState({
            persons: [
                {name: 'Peter', age: 36},
                {name: 'Laura', age: 30},
                {name: 'Elaine', age: 45}
            ],
            otherState: personsState.otherState
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}/>
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                click={switchNameHandler}/>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}/>

            <Person
            name={personsState.persons[3].name}
            age={personsState.persons[3].age}/>
        </div>


    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default app;

// state = {
//     persons: [
//         { name: 'Ramon', age: 28 },
//         { name: 'Laura', age: 26 },
//         { name: 'Elaine', age: 56 }
//     ],
//     otherState: 'some other value'
// };

// switchNameHandler = () => {
//     console.log('was clicked');
//     // DONT DO THIS" personsState.persons[0].name = 'Peter';
//     this.setState({
//         persons: [
//             {name: 'Peter', age: 36},
//             {name: 'Laura', age: 30},
//             {name: 'Elaine', age: 45}
//         ]
//     })
// }
