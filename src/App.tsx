import React, {MouseEvent, useState} from 'react';
import './App.css';

function App() {
    let [a, setA]=useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    let [b, setB]=useState(0)

    const onClickHandleB = () => {
        console.log(b)
    }

    return <div>
        <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
        <button onClick={onClickHandleB}>0</button>
    </div>
}

export default App;