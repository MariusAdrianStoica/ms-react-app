import React from "react"; 
// 1st step: it is a React component -> import React
// 2nd step: after defining all the functions (Header, Content and Footer), 
// -> we have to write another function (with the same name as file), in order to call other functions
// 3rd step: export AppFunction (the name of the file)
// 4th step: modify in index.js -> root.render(<AppFunction/>)

//rsf -> shortcut to create function


function Header(){ // Header -> the name of the function  == the name of the Component

    return(
        <>
            Header from function
        </>
    );
}

function Footer(){ // we can define more functions in he same file

    return(
        <>
            Footer from function
        </>
    );
}

function Content(){ 
//inject Welcome component into Content component
//add a name as a props and modify the Welcome function
    return(
        <>
            Content from function: <Welcome name ="Test" message="Welcome to my first React App!"/> 
            <hr/>
            Content: <Welcome name ="Marius" message="Välkommen till min första App!"/> 
            
        </>
    );
}

function Welcome(props){
//Hi React, Welcome to my first App -> changing React with a name chosen in Content as a param(props)
// always use {}
    return(
        <div>
        Hi {props.name}, {props.message}
        </div>
    );
}

function AppFunction(){
    return(
        <>
      
        <Header/>
        <br/>
        <Content/>
        <hr/>
        <Footer/>
        
        </>
    );

}
export default AppFunction;