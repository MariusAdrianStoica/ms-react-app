import React, { useEffect, useState } from 'react';

const XUseEffectExample = () => {

    //define a boolean variable
    const [reload, setReload] = useState(false);

    // Is used for side-effects (do something after render)
    //useEffect - hook function with 2 params:
    // 1: callback: anonymus function () => {}
    // 2: [dependecies]: Array
    useEffect(() => {
        console.log("useEffect executed!");
        const currentDateTime = new Date(); //== Date.now
        setDateTime(currentDateTime.toString());

    }, [reload] ); //reload is false

    const [dateTime, setDateTime] =useState("Default value....");
    const updateDateTime = () =>{
        //setDateTime("New value...")
        setReload(!reload); //reload is true

    }

    return (
        <div className='container mt-5'>
            <h3>Use Effect Example!</h3>
            <div className='alert alert-info'>{dateTime}</div>
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-warning' onClick={updateDateTime}>Update DateTime</button>
                </div>
            </div>
        </div>
    );
};

export default XUseEffectExample;