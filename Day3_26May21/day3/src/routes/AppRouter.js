import React, { Component } from "react";
import { BrowserRouter, Route,  Switch } from 'react-router-dom'
import Header from "./Header";
import Login from "../reactnav/Login";
import Registration from "../reactnav/Registration";
import NotFound from "../reactnav/NotFound";


const AppRouter =() =>(
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={Login} exact={true} />
    <Route path="/register/:name" component={Registration} exact={true} />
    <Route component={NotFound} />
    </Switch>
     
    </div>
    
    </BrowserRouter>
    
)
        
export default AppRouter