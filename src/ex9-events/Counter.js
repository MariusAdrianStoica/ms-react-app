import React, { useState } from 'react';

const Counter = () => {
    //if you want to define an event -> onClick


    const [counter, setCounter] = useState(1);

    // defining a separate logic to increment -> it can be used in other parts too
    const incrementClick = () =>{
        setCounter(counter + 1);
        console.log("incrementClick")
    }
    const decrementClick = () =>{
        setCounter(counter - 1);
        console.log("decrementClick")
    }
    
    /*const resetClick = () =>{
        setCounter(0);
        console.log("resetClick")
    }
    */

    // using an anonymus method instead of const -> {()=>{setCounter(0)}}

    return (
        <div className='container'>
            <h3>Counter: {counter}</h3>
            <button type='button' className='btn btn-success' onClick={incrementClick}>Increment</button>
            <button type='button' className='btn btn-danger' onClick={decrementClick}>Decrement</button>
            <button type='button' className='btn btn-secondary'onClick={()=>{console.log("reset"); setCounter(0)}}>Reset</button>
            
        </div>
    );
};

export default Counter;