import React from 'react';
import { builtinModules } from 'module';

const person = (props) => {
    return (
        <div className="Person">
        <p>I'm {props.name} and I am {props.age} years old!</p>
        <button onClick={props.click}>Update</button>
        <p>{props.children}</p>
        <input type="text" placeholder='enter a name' onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;