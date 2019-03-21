import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';
// import { doesNotReject } from 'assert';

class App extends Component {
  state = {
    persons: [
      {id:'tret', name: 'Max', age: 29},
      {id:'7u34', name: 'Bruce', age: 30},
      {id:'y4567y', name: 'Wayne', age: 32}
    ],
    otherState: 'some other value',
    showPersons: false
  }
deletePersonHandler =(personIndex) => {
  const persons =[...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click = {() => this.deletePersonHandler(index)}
                name = {person.name}
                age = {person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick = {this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
        
    );

    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Hi, I\'m react'));
  }
}

export default App;
