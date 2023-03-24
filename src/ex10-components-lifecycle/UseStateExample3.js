import React, { useState } from 'react';
import Data from './Data';
// in this part, we will break <div className='container mt-5'>  into 2 other component 
//->1: a Form to input data and submit
//-> 2: a ShowData Card
const UseStateExample3 = () => {
    // in the root/parent we have to define all var that we use in all components
    const initialState = {firstName: "",lastName:""}
    const[showCard, setShowCard] = useState(false);  
    const [person, setPerson] = useState(initialState);
    

    const Form = ()=>{
     //in the Form, we have to define only the var that we use in Form
        const [errorForm, setErrorForm] =useState(initialState);     
         

        const onInputChange = (e, name) =>{
        
            const val = e.target.value;
            let _person = {...person} 
            
            _person[`${name}`]= val;
            
            setPerson(_person);
        }
    
        const clickHandler = () =>{
    
            let isValid = true; 
            let _errorForm = {}
        
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
                setErrorForm(initialState) 
                setShowCard(true);
                
            }  else{
                setErrorForm(_errorForm);
                setShowCard(false)
              }
        }
        return (<div>
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
        </div>)
    }

    
    const ShowData = ()=>{
        
        return ( <div>we moved the show card logic to an external component Data.js</div>            
           )
    }
    // <ShowData showCard={showCard}/> -> if we want to pass showCard as a props

    //in order to make the ShowData Card reusable in other apps, we defined it as an external component Data
    //but we need to pass the showCard, person.firstName and person.lastName to this component 
    //-> using props -> used to pass data between components
    return (
        <div className='container mt-5'> 
          
          <Form/>
          <Data showCard={showCard} firstName={person.firstName} lastName={person.lastName}/>

        </div>
    );
};

export default UseStateExample3;