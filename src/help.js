import { useState } from "react";

const Help = () => {
    const [name, setName] = useState('Modinat');
    const [age, setAge] = useState(25);

    const rightClick = () => {
        setName('Muhibah');
        setAge('50');

    }

    return (
        <div className="help">
            <h2>{name}</h2>
            <p>I met {name} who is now {age} years old</p>
            <button onClick={rightClick}>Click here to Apply</button>
        </div>
    );
}

export default Help;