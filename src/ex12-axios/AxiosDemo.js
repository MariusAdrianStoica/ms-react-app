import React, { useState } from 'react';
import axios from 'axios';
import AlertMessage from './AlertMessage';

const AxiosDemo = () => {

    const API_URL = "http://localhost:8080/api/v1/person" // defining the path into a const
    const [people, setPeople] = useState([]);

    const [person, setPerson] = useState();
    const [selectedId, setSelectedId] =useState(3)


    const [alert, setAlert] = useState({type: "", message: "" });

    const getRequestedAction = async () =>{
        console.log("### Start Get");
        // any function in JS will work correct only if we add async && await 

        //await axios.get("http://localhost:8080/api/v1/person").then(response =>{
        await axios.get(API_URL).then(response =>{
            console.log("Response: ",response);
            if (response.status === 200){ //if status is ok (200 for get)
                setPeople(response.data); // people will get the data from DB
                setAlert({type: "success", message: "GET operation is done!"})
                
            }else{
                setAlert({type: "warning", message:"Display API Error message..."})

            }
        }).catch(error =>{
            console.log("Error: ", error); //other type of error
            setAlert({type: "danger", message: error.message})
           

        });
        
        console.log("### End Get");
    }

    const getRequestByIdAction = async () =>{
        console.log("### Start GetById");
        // any function in JS will work correct only if we add async && await 

        //await axios.get("http://localhost:8080/api/v1/person").then(response =>{
        await axios.get(API_URL+"/"+selectedId).then(response =>{
            console.log("Response: ",response);
            if (response.status === 200){ //if status is ok (200 for get)
                //SetPeople(response.data); 

                // get after selectedID will return a person, not an array
                setPerson(response.data);
                setAlert({type: "success", message: "GET By ID operation is done!"})
                
            }else{
                setAlert({type: "warning", message:"Display API Error message..."})

            }
        }).catch(error =>{
            console.log("Error: ", error); //other type of error
            setAlert({type: "danger", message: error.message})
           

        });
        
        console.log("### End GetById");
    }

    const postRequestAction = async ()=>{
        console.log("### Start Post");
         const newPerson = {firstName: "test", lastName: "testsson", email:"test@test.se", title:"TEST" };
         await axios.post(API_URL, newPerson).then(response =>{
            console.log("Response: ",response);
            if (response.status === 201){ //if status is ok (201 for post)
                setPerson(response.data); // set the person with the new data
                setAlert({type: "success", message: "POST operation is done!"});
                
            }else{
                setAlert({type: "warning", message:"Display API Error message..."})

            }

         }).catch(error => {
            console.log("Error: ", error); //other type of error
            setAlert({type: "info", message: error.message})
         })
        
        console.log("### End Post");

    }
    const putRequestAction = async ()=>{
        console.log("### Start Put/Update");

        //in PUT we need the same statement as in POST and we add also id 
        //id(last generated id) in order to update
         const newPerson = {id: 6, firstName: "test5", lastName: "testsson2", email:"test@test.se", title:"TEST" };
         await axios.put(API_URL, newPerson).then(response =>{
            console.log("Response: ",response);
            if (response.status === 204){ //if status is ok (204 for put)
                //setPerson(response.data); // -> no new content in case of upodate
                setAlert({type: "success", message: "PUT operation is done!"});
                
            }else{
                setAlert({type: "warning", message:"Display API Error message..."})

            }

         }).catch(error => {
            console.log("Error: ", error); //other type of error
            setAlert({type: "info", message: error.message})
         })
        
        console.log("### End Put");

    }
    const deleteRequestByIdAction = async () =>{
        console.log("### Start DeleteById");
        // any function in JS will work correct only if we add async && await 

        //await axios.get("http://localhost:8080/api/v1/person").then(response =>{
        await axios.delete(API_URL+"/"+4).then(response =>{
            console.log("Response: ",response);
            if (response.status === 204){ //if status is ok (204 for delete)
                //SetPeople(response.data); 

                // get after selectedID will return a person, not an array
                setPerson(response.data); 
                setAlert({type: "success", message: "Delete By ID operation is done!"})
                
            }else{
                setAlert({type: "warning", message:"Display API Error message..."})

            }
        }).catch(error =>{
            console.log("Error: ", error); //other type of error
            setAlert({type: "danger", message: error.message})
           

        });
        
        console.log("### End DeleteById");
    }
    return (
        <div className='container pt-5'>
            <h3>Axios Demo</h3>
            <AlertMessage message={alert.message} type={alert.type}/>
            <div className='row'>
                <div className='col'>
                    <button type="button" className='btn btn-info' onClick={getRequestedAction}>Get</button>
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className='col'>
                    <button type="button" className='btn btn-primary' onClick={getRequestByIdAction}>GetById</button>
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className='col'>
                    <button type="button" className='btn btn-success' onClick={postRequestAction}>Post</button>
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className='col'>
                    <button type="button" className='btn btn-warning' onClick={putRequestAction}>Post</button>
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className='col'>
                    <button type="button" className='btn btn-danger' onClick={deleteRequestByIdAction}>DeleteById</button>
                </div>
            </div>
            
        </div>
    );
};

export default AxiosDemo;