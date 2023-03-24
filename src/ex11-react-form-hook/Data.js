import React from 'react';

//in order to make the ShowData Card reusable in other apps, we defined it as an external component
//but we need to pass the showCard, person.firstName and person.lastName to this component 
//-> using props -> used to pass data between components

//Date is a stateless component (without state)

const Data = (props) => {

    
    
    return (
        <div>
            {props.showCard &&(
            <div className='card'>
                <div className='card-header bg-info text-white'>Person:</div>
                <div className='card-body'> {props.firstName} </div>
                <div className='card-footer'>{props.lastName.toUpperCase()}</div>
                
                
                
            </div>
            )} 
        </div>
    );
};

export default Data;