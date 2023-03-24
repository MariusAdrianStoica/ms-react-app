import React, { useState } from 'react';
// in this part, we will break <div className='container mt-5'>  into 2 other component 
//->1: a Form to input data and submit
//-> 2: a ShowData Card
const UseStateExample2 = () => {
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
        //we need to pass here showCard value and person value-> both defined in Form
        //we can use props, but there will be another problem - show card is used in UseStateExample2 too
        //-> that's way the best way is to define these var in the root

        

        //{props.showCard &&( -> if we want to pass showCard as a props
        return (<div>
            
            {showCard &&(
            <div className='card'>
                <div className='card-header bg-info text-white'>Person:</div>
                <div className='card-body'>
                    {person.firstName}
                    
                </div>
                <div className='card-footer'>
                {person.lastName.toUpperCase()}
                </div>
            </div>
            )}
        </div>)
    }
    // <ShowData showCard={showCard}/> -> if we want to pass showCard as a props
    return (
        <div className='container mt-5'> 
          
          <Form/>
          <ShowData/>

        </div>
    );
};

export default UseStateExample2;