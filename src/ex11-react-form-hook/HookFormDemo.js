import React from 'react';
import { useForm } from 'react-hook-form';
//in order to use react-hook-form, we have to install it: npm install react-hook-form 

//we want to rewrite the form from UseState Example using useForm validation 
//in order to use #useForm# -> we need to define a const {register, handleSubmit, formState: {errors}} 
//that returns an object
// in #useState -> const [object, setObject]

const HookFormDemo = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    //register              ->is a function
    //handleSubmit          ->
    //formState:{errors}    ->

    const saveData = (data)=> {
        console.log("Data:", data)
    }

    //container mt-3 -> margin top
    //from the form in UseStateExample, we will remove the value and onchange and from the button onclick
    //in order to validate input using useForm
    //-> we need to write in input cell {...register("fieldname", {required: true, maxLength:10, minLength:2})}
    //different other conditions in required
    //put <span className='text-danger'></span> in  
    //{errors.firstName && errors.firstName.type === "required" && (<span className='text-danger'>Valid firstName is required</span>)}


    //in order to make the validation directly, we will complete the form with onSubmit= {handleSubmit(saveData)}
    //and the button type is modified from "button" to "submit"
    return (
        <div className='container mt-3'> 
        <form onSubmit = {handleSubmit(saveData)}>
                <div className='mb-3'>
                    <input type="text" {...register("firstName", {required: true, maxLength:5, minLength:2})} 
                    className='form-control' id="firstName" 
                    name='firstName' placeholder='Enter First Name...'/>
                    {errors.firstName && errors.firstName.type === "required" && (
                        <span className='text-danger'>firstName is empty</span>
                    )}
                     {errors.firstName && errors.firstName.type === "maxLength" && (
                        <span className='text-danger'>Length of the firstName shoud be less then 5</span>
                    )}
                    {errors.firstName && errors.firstName.type === "minLength" && (
                        <span className='text-danger'>Length of the firstName shoud be more then 2</span>
                    )}
                    
                </div>
                <div className='mb-3'>
                    <input type="text" {...register("lastName", {required: true, maxLength:6, minLength:2})}
                    className='form-control' id="lastName" 
                    name='lastName' placeholder='Enter Last Name...'/>
                    {errors.lastName && errors.lastName.type === "required" && (
                        <span className='text-danger'>lastName is empty</span>
                    )}
                     {errors.lastName && errors.lastName.type === "maxLength" && (
                        <span className='text-danger'>Length of the lastName is shoud be less then 6</span> 
                    )}
                    
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-primary'>Click Me!</button>
                </div>

            </form>
            
        </div>
    );
};

export default HookFormDemo;

//https://www.react-hook-form.com/api/useform/