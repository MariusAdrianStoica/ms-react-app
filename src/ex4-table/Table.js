import React from 'react';



//we can define another component(header) inside or outside our Table
//all components must begin with Capital letter
const TableHeader= ()=> {
    return(
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>   
    )
}
const TableAction = ()=> {
    //defining another component inside the row
    //if we have 2 elements -> we must use <div><div/>
// className="delete-btn"> will become className="btn btn-danger" from bootstrap

    return(
        <>
        <button type='button' className="btn btn-outline-danger">Delete</button>
        <button type='button' className="btn btn-outline-warning">Edit</button>
        </>

        
    );
    
}

const TableBody = ()=>{
    //we can break the row into components -> <td>Delete</td> -> adding a button
    //1st case: - write the code direct
    //2nd case: define a new component(const Button)
    return(
        <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test Testsson</td>
                        <td><button type='button'>Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mehrdad Javan</td>
                        <td><TableAction/></td>
                    </tr>

                </tbody>
    )
}
const Table = () => {
    //in html we define  <div class= "test"> -> but to work in React, we will have  <div className= "test">
    //properties are camelCase (first word letter lowercase, second word letter Capital): onclick ->onClick
    //selfclosing tags must end in a slash: <img/>
    //Component can return only 1 element, but that element can have many child -> use <div>  <div/> or empty

    //remove the border="1" in <table> with className='table table-dark table-stripped' from bootstrap tables -w3school
    return (
        <div className='test'>
            <table className ='table table-dark table-striped'>
                <TableHeader/>
                <TableBody/>
            </table>
        </div>
    );
};

export default Table;