import React from 'react';

const Menu = (props) => {

    /*
    const menulist = [  
        {id:1, name: "Home",path: "/home", active: "active"},
        {id:2, name: "SignIn",path: "/login", active: ""},
        {id:3, name: "SignUp",path: "/register", active: ""},
        {id:4, name: "Products",path: "/products", active: ""},
        {id:5, name: "About",path: "/about", active: ""},
                    ];
    //define an array of objects using {},{},{}
    */


    // using const Menu = (props) => { -> we can define in another component the list of menues (App.js)
    //-> then we need to start with props (menulist.map(menu => { -> props.menulist.map(menu => {)
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    {
                        props.menulist.map(menu => {
                            //we modified the href="#" -> {menu.path}
                            //we modified the Link1 -> {menu.name}
                            //because this element shoul be unique -> we add a Key to the <li> -> key = {menu.id}

                            //in order to make <a className="nav-link active ", dynamic 
                            //->  <a className={`nav-link ${menu.active}`}
                            //`` - backtick (key between ? and backspace -> SHIFT+That key (x2))
                            //$ - ALTgr + 4

                            return  <li key = {menu.id}className="nav-item">
                                        <a className={`nav-link ${menu.active}`} href={menu.path}>{menu.name}</a>
                                    </li>
                        })
                    }
                
                </ul>
            </div>
        </nav>
    );
};

export default Menu;