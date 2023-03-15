import React, { useState } from 'react';
import AlertMessage from './AlertMessage';

const Person = () => {
    //when we want to define a form element -> must put it inside <form></form>

    //const [firstName, setFirstName] = useState(""); //empty
    //const [lastName, setLastName] = useState("");


    const [person, setPerson] = useState({firstName: "", lastName:""}); //is an object with 2 atributes

    //const [showMessage, setShowMessage] = useState(false); 
    // define a boolean var in order to show message Invalid Data!
    //default value = false

    const [showMessage, setShowMessage] = useState({type: "", message : ""}); 
    const [showData, setShowData] = useState(false); // in order to display info if the input ws valid
    

    const changeFirstName = (event)=>{
        const valueFN = event.target.value;
        //setFirstName(valueFN); -> setFirstName() has no meaning after defining person
        //console.log("valueFirstName: ", valueFN);
        setPerson({...person, firstName: valueFN}, []);
    }
    const changeLastName = (event)=>{
        const valueLN = event.target.value;
        //setLastName(valueLN); -> setLastName() has no meaning after defining person
        //console.log("valueLastName: ",valueLN);
        setPerson({...person, lastName: valueLN}, []);
    }

    const clickBtn = () => {
        //console.log("FirstName: ", person.firstName, "LastName: ", person.lastName);
        if (person.firstName.length>2 && person.lastName.length>2){
            console.log("Data: ", person);
            //setShowMessage(false)
            setShowMessage({type: "success", message:" Operation is done!"})
            setShowData(true);

        } else {
            //setShowMessage(true);
            setShowMessage({type: "danger", message:" Operation failed!"});
            setShowData(false);
        }
        
    }
    // {showMessage && ( ) -> if showMessage is true , do this
/* in order to make dynamic, we will modify:
        {showMessage && (
            <div className='alert alert-danger'>
                <strong>Danger!  </strong> 
                Invalid Data!
            </div>
            )}
*/ 

/* we can define another component-> in order to use it in another place -> AlertMessage.js
<div className={`alert alert-${showMessage.type}`}>
                {showMessage.message}
                
            </div>
*/ 

    return (
        
        <div className='container'>
            {showMessage && (
            <AlertMessage message = {showMessage.message} type= {showMessage.type}/>
            )}

            <div className='card'>
                <div className='card-header bg-info text-white'>FORM</div>
                    <div className='card-body'>

                        <form className='form-control'>
                            <div className='mb-3'>
                                <label for="text" class="form-label">FirstName:</label>

                                    <input type="text" className='form-control' id='firstName' name='firstName' 
                                    value={person.firstName} onChange={changeFirstName} placeholder='Please enter firstname'></input>

                                    <br></br>
                                    <label for="text" class="form-label">LastName:</label>

                                    <input type="text" className='form-control' id='lastName' name='lastName' 
                                    value={person.lastName} onChange={changeLastName} placeholder='Please enter lastname'></input>
                            </div>
                    <div className='mb-3'>
                        <button type='button' className='btn btn-success' onClick={clickBtn}>Click</button>
                    </div>
                </form>              
            </div>
            <div className='card-footer'></div>
            
            </div>

           


            {showData && (
                <>
                <br/>
                <hr/>
                <br/>

                <div className='card'>
                <div className='card-header bg-dark text-white'>
                    Data:
                </div>
                <div className='card-body'>
                    <div className='bm-3'>
                        <span>
                            FirstName: {person.firstName}
                        </span>
                    </div>
                    <div className='bm-3'>
                        <span>
                            LastName: {person.lastName}
                        </span>
                    </div>
                </div>

            </div>

            </>
            )}



            
                
        </div>
    );
};



export default Person;