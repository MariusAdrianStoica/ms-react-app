import React, { useState } from 'react';

const UseStateExample = () => {

    //person has firstName and lastName -> every field always inside the {} -> defining an object
    //initialstate of the person -> JavaScript object
    const initialState = {firstName: "",lastName:""}

    //person is the state, SetPerson is the function
    //at this step, firstName and lastName are "" and "" 
    const [person, setPerson] = useState(initialState);

    //defining an object that has 2 params : ERRMessage for firstName and ERRMessage for lastName
    //an object that has empty firstName && lastName 
    const [errorForm, setErrorForm] =useState(initialState);

    //defining showCard in order to display the card only after valid input
    const[showCard, setShowCard] = useState(false);

    //defining a function that will change both the firstname or the last name
    //e = event -> to know in ehich field we are inputing
    //name = attribute Name
    const onInputChange = (e, name) =>{
        

        //val will be e.target.value (where the event is happening)
        // we are getting the value also
        const val = e.target.value;
        //console.log("Name: ", name); -> it will display in the console every time you input something in wich field
        //console.log("Value: ", val); -> it will display in the console the result input

        // making a clone of the person using {...person}
        let _person = {...person} 
        
        //accesing the field firstname
        //the same effect -> _person["firstName"] = val;
        //_person.firstName = val;

        //accesing the field lastName
        //the same effect -> _person["lastName"] = val;
        //_person.lastName = val;

        // making dynamic using backtick ` (Shift + key between backspace and +/?)
        //name is what we used in the function
        _person[`${name}`]= val;

        //initialize the person with the new input data
        // a new current state
        
        setPerson(_person);
        
    }

    const clickHandler = () =>{

        //defining a boolean var in order to validate 
        let isValid = true; 

        //define a clone of the errorForm-> has same fields (firstName and lastName) -> let _errorForm = {...errorForm}
        //but we can define even an empty object because it will add fields like we define
        //->  _errorForm.firstName or  _errorForm.lastName
        let _errorForm = {}
        // in this button we want to validate params
        if(person.firstName.length < 2){
            _errorForm.firstName = "First name was not valid!"
            isValid=false;
        }
        if(person.lastName.length < 2){
            _errorForm.lastName = "Last name was not valid!"
            isValid=false;
        }
        if(isValid){  
            console.log("Person: ", person);
            setErrorForm(initialState) // setErrorForm({}) -> set empty will make that no message will be displayed
            setShowCard(true)
            console.log(showCard)
        }  else{
            setErrorForm(_errorForm);
            setShowCard(false)
          }
    }

    /* downhere, we have a component without a state 
    <div className='container'> 
    <form>
        <div className='mb-3'>
            <input type="text" className='form-control' id="firstName" name='firstName' placeholder='Enter First Name...'/>
        </div>
        <div className='mb-3'>
            <input type="text" className='form-control' id="lastName" name='lastName' placeholder='Enter Last Name...'/>
        </div>
    </form>
    </div>
    */

    //after adding the state -> useState() -> we have a statefull component

    // onChange={(e) => onInputChange(e, "firstName")} 
    //- > we defined a function that takes 2 param (event and the name of the field)
    return (
        <div className='container mt-5'> 
            <form>
                <div className='mb-3'>
                    <input type="text" value={person.firstName} onChange={(e) => onInputChange(e, "firstName")}
                    className='form-control' id="firstName" 
                    name='firstName' placeholder='Enter First Name...'/>
                    <span className='text-danger'>{errorForm.firstName}</span>
                </div>
                <div className='mb-3'>
                    <input type="text" value={person.lastName} onChange={(e) => onInputChange(e,"lastName")}
                    className='form-control' id="lastName" 
                    name='lastName' placeholder='Enter Last Name...'/>
                    <span className='text-danger'>{errorForm.lastName}</span>
                </div>
                <div className='mb-3'>
                    <button type='button' className='btn btn-primary' onClick={clickHandler}>Click Me!</button>
                </div>

            </form>
            <br/>

            {showCard &&(
            <div className='card'>
                <div className='card-header bg-info text-white'>Person:</div>
                <div className='card-body'>
                    <h5>FirstName: {person.firstName}</h5>
                    <h5>LastName: {person.lastName.toUpperCase()}</h5>
                </div>
                <div className='card-footer bg-dark'>
                    <button type='button' className='btn btn-primary'>Hide</button>
                </div>
            </div>
            )}

        </div>
    );
};

export default UseStateExample;