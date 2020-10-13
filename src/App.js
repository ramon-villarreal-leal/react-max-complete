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
        console.log('was clicked');
        // DONT DO THIS" this.state.persons[0].name = 'Peter';
        this.setState({
        persons: [
            {name: 'Peter', age: 36},
            {name: 'Laura', age: 30},
            {name: 'Elaine', age: 45}
        ]
        })
    }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
          <button onClick={this.switchNameHandler}>Switch name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
