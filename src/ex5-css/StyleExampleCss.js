import React from 'react';
import Table from '../ex4-table/Table';
//import './table.css';
//in order to apply style from table.css, we must first import it


//step1: add style={} and define props between {}
const StyleExampleCss = () => {
    return (
        <div>
            <h3>Styling using React</h3>
            <h4 style={{color:"blue", background:"yellow"}}> Hello React!</h4>
            <br/>
            <hr/>
            <Table/>
            
        </div>
    );
};

export default StyleExampleCss;