// import React from "react";

//rsc -> shortcut to inser ArrowFunction component

//const AppArrowFunction = () => {"Hellow React"};

// using arrow function in order to avoid return() syntax

import React from 'react';

const Header = () => "Header";
const Content = () => "Content";
const Footer = () => "Footer";

const AppArrowFunction = () => 

        <div>
            <Header/>
            <hr/>
            <Content/>
            <hr/>
            <Footer/>
        </div>
    
export default AppArrowFunction;