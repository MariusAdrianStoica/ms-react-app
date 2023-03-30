import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams, useLocation, Redirect } from 'react-router-dom';
//1st step: npm install react-router-dom@5.3.0 
//2nd step: import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
//3rd step: inside the div(return), we define Router: 
/*<Router> 
    <Switch>
        <Route path="/"/>
        
    </Switch> 
</Router> 
*/

const RouterDemo = () => {
    //redirect is used to override the current location
    return (
        <div className='container'>
            <Router>
                <Header/>

                <Switch>
                    <Route exact path="/" component={Welcome}/>;
                    <Route path="/welcome" component={Welcome}/>;
                    <Route path="/home" component={Home}/>;
                    
                    <Route path="/about">
                        <About/>
                    </Route> ;

                    <Redirect from="/add" to="/form"/>;

                    <Route path="/form" component={Form}/>;
                    <Route path="/data/:id" component={Data}/>;
                    
                    <Route path="/error" component={ErrorComponent}/>;
                    
                    <Route component={ComponentNotFound}/>


                    

                </Switch>
            </Router>
            
        </div>
    );
};

const Header = ()=>{
    //because form, doesn't exist in Router, it will display 404 - Component Not Found
    return(
        <ul className='nav nav-pills nav-fill bg-dark text-white'>
            <li className='nav-item'>
                <Link className='nav-link' to="/">Welcome</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/home">Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/form">Form</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/about">About</Link>
            </li>
        </ul>

    )
}

const Welcome = ()=> {
    return (
        <div className='container'>
            <h4>Welcome Component!</h4>
        </div>

    );
}
const Home = ()=> {

//inside Home, we defined a button Back, in order to get the previous URL
//for that it is necessary to define a const history = useHistory() function
// useHistory() - gives us the current route of the switch 
//this way, we can acces diffrent functionalities of history like: 
//goBack() -> redirect to the previous view 
//or push("path")->redirect to a specific view



    const history = useHistory();
    return (
        <div className='container'>
            <h4>Home Component!</h4>
            <br/>
            <button type='button'className='btn btn-danger' onClick={()=> history.goBack()}>Back</button>
            <br/>
            <button type='button'className='btn btn-info' onClick={()=> history.push("/about")}>Go to About</button>

        </div>

    );
}
const About = ()=> {
    return (
        <div className='container'>
            <h4>About Component!</h4>
        </div>

    );
}

const ComponentNotFound = ()=> {
    return (
        <div className='container'>
            <h4>404 - Component Not Found</h4>
        </div>

    );
}

const Form = () =>{
    const history = useHistory(); 
    // we use -> useHistory() in order to navigate to the next link (/data) when we click the button
    //useHistory -> to acces the history of an object in order to navigate there

    const [id, setId] =useState(0);
    const [name, setName] = useState("");

    
    
    const clickHandler = ()=>{
//we declared a new const -> data, in order to send a person (id, name) to the BackEnd
        const data = {id, name};
        history.push("/data/"+id, data);
    }
    return(
        <div className='container'>
            <div className='row pt-3' >
                <div className='col'>
                    <input type="text" className='form-control' value={id} 
                    onChange={(e)=>{setId(e.target.value)}}
                    placeholder='Enter number here...' />
                </div>
                <div className='col'>
                    <input type="text" className='form-control' value={name} 
                    onChange={(e)=>{setName(e.target.value)}}
                    placeholder='Enter name here...' />
                </div>
                <div className='col'>
                    <button type='button' className='btn btn-success' onClick={clickHandler}>Click</button>
                </div>

            </div>
        </div>
    )
}

const Data = ()=>{

    //useParams() -> to access the parameter (from url)
    //useParams() return an object that has a key and value
    const params = useParams();

    //useLocation -> to get info of the current location
    const location = useLocation();
    const [id, setId] = useState(params.id);

    if(params.id == 0){
        //return <Redirect to="/error" />;

        return <Redirect to={{
            pathname: "/error", 
            state: {message: "Param is not valid!"}}}/>;
    }
    return(
        <div className='container'>
            <p>Data Component Id: {params.id}</p>
            <p>{location.state.id} - {location.state.name}</p>
        </div>
    );
}

const ErrorComponent = ()=>{

    const location = useLocation();

    return (

        <>Error Component ! {location.state.message && (<b>{location.state.message}</b>)}</>

    );
}
export default RouterDemo;