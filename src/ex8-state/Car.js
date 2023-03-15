import React, { useEffect, useState } from 'react';

const Car = () => {
    // inside function component if we want to use "state" -> we use const [] = useState();

    const [car, setCar ] = useState({brand:"Volvo", model:"V60"});
    //car is current state (getter) & setCar is the next state(setter)
    // car is an object with 2 characteristics

    useEffect( ()=>{
        console.log("use effect is working" )
        //setCar({brand:"BMW", model:"x6"})
        //-> update all object fields 
        
        setCar({... car, model :"V90", color: "Gray"})
        //to this car <<{... car, model :"V90"}>> will update only the model, and keeps the others attributes
        //with << ...car>>, we can make a clone of the previos object and then update properties
        //if we want, we can add a new attribute <<color: "Gray">>, even if it was not defined earlier


                    }  , []   );
    //useEffect will modify the car components -> setcar
    // useEffect has 2 param: a function << ()=>{} >> and an array << [] >>
    //function is used to modify components (brand & model)
    //useEffect is called after the component is rendered into the DOM

    return (
        <div>
            <b>{car.brand} {car.model} {car.color}</b>
        </div>
    );
};

export default Car;