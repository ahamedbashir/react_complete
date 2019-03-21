import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 29},
      {name: 'Bruce', age: 30},
      {name: 'Wayne', age: 32}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log('was click');
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: 'Bruce', age: 31},
        {name: 'Wayne', age: 32}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 29},
        {name: event.target.value, age: 29},
        {name: 'Wayne', age: 30}
      ]
    });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick = {() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}
          changed = {this.nameChangeHandler}/>

        <Person 
          name = {this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );

    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Hi, I\'m react'));
  }
}

export default App;
