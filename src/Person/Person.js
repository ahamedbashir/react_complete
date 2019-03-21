import React from 'react';
import { builtinModules } from 'module';

const person = (props) => {
    return (
        <div className="Person">
        <p>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" placeholder='enter a name' onChange={props.changed} value={props.name}/>
        <button onClick={props.click}>Delete this person</button>
        </div>
    );
}

export default person;