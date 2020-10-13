import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Ramon', age: 28 },
            { name: 'Laura', age: 26 },
            { name: 'Elaine', age: 56 }
        ],
        otherState: 'some other value'
    }

    switchNameHandler = () => {
        // console.log('was clicked');
        // DONT DO THIS" this.state.persons[0].name = 'Peter';
        this.setState({
            persons: [
                { name: 'Ramon', age: 39 },
                { name: 'Laura', age: 45 },
                { name: 'Elaine', age: 23 }
            ]
        })
    }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
          <button onClick={this.switchNameHandler}></button>
          <Person name={this.state.persons[0]} age={this.state.age[0]}/>
          <Person name={this.state.persons[1]} age={this.state.age[1]}>My hobbies: Gaming</Person>
          <Person name={this.state.persons[2]} age={this.state.age[2]}/>
      </div>

    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
