import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import Login from "./Login";
import Registration from "./Registration";
import NotFound from "./NotFound";
 export default class LandingPage extends Component {
render(){

     return(
           <div>
               {routes}
            </div> )
    }}

const Header =() =>{

    return (
    <header>
        <NavLink to ="/" exact={true} >Login</NavLink>
        <NavLink to ="/register"  >Register</NavLink>
    </header>
    )
}


const routes =(
<BrowserRouter>
<div>
<Header/>
<Switch>
<Route path="/" component={Login} exact={true} />
<Route path="/register" component={Registration} exact={true} />
<Route component={NotFound} />
</Switch>
 
</div>

</BrowserRouter>


    )
    