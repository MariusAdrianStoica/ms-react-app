import React from 'react';

//to parse the date from a component to other component we must add props
//const NameList = () => { , will become const NameList = (props) => {
// then in general return :
//names.map(name => <li>{name} - {getLastName(name)} - {name.toUpperCase()}</li>) } ->
//props.names.map(name => <li>{name} - {getLastName(name)} - {name.toUpperCase()}</li>) }


const NameList = (props) => {

    const namesE = []; // define an empty array
    const namesX = ["Mehrdad Javan", "Marius Stoica", "Test Testsson"]; // define an array with 2 fields
    //defining the array directly in Index.js

    // this function will take the name and return the lastname
    //in return -> we return inside {} -> <b>{lastName}</b>
    const getLastName = (name) => { 
        let lastName = name.split(" ")[1];
        return <b>{lastName}</b>
    }

    return (
        <ul>
            {
                props.list.map(name => <li>{name} - {getLastName(name)} - {name.toUpperCase()}</li>) }
        </ul>
    );
};

export default NameList;