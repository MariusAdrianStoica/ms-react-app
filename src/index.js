//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import AppClass from "./ex1-class/Appclass";
import AppFunction from "./ex2-function/AppFunction";
import AppArrowFunction from "./ex3-arrow-function/AppArrowFunction";
import Table from "./ex4-table/Table";
import StyleExampleCss from "./ex5-css/StyleExampleCss";

//importing bootstrap for all components in the principal index.js file -> import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import NameList from "./ex6-var-function/NameList";
import Menu from "./ex7-props/Menu";
import App from "./ex7-props/App";
import Car from "./ex8-state/Car";
import ProductList from "./ex8-state/ProductList";
import Counter from "./ex9-events/Counter";
import Person from "./ex9-events/Person";

const greetingMessage =<div>Hello React!</div>;

const menu = <ul> 
    <li>Home</li>
    <li>Login</li>
    <li>Contact Us</li>
</ul>;
console.log(">>>>>>> Hello React!")
//ReactDOM.render(menu, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));

// define the array from ex6 directly in index
//root.render(<NameList/>) -> root.render(<NameList/>);
const names = ["Mehrdad Javan", "Marius Stoica"];

root.render(<Person/>);