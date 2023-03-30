import React, { Component } from "react";
import ContentClass from "./ContentClass";
import FooterClass from "./FooterClass";
import HeaderClass from "./HeaderClass";
//before strating a react app, we have to check in Commander node -v and npm -v

//rcc - shortcut to create class component
class AppClass extends React.Component{
    render(){
        //return(<h1>Hello React !!!</h1>); -> we want to merge here all the components (Header, Content and Footer)
        return(
            // if we want to return more then one component, all should be inside <div>  </div> or empty : <>   </>
            
            
            //<div>
                <>
                <HeaderClass/>
                <hr/>
                <ContentClass/>
                <br/>
                <FooterClass/>
                </>
            //</div>
            
            
        );
    }
}
export default AppClass;