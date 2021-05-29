
import React from 'react'
import {NavLink} from 'react-router-dom'

const Header =() =>{

    return (
    <header>
        <NavLink to ="/" exact={true} >Login</NavLink>
        <NavLink to ="/register"  >Register</NavLink>
    </header>
    )
}
export default Header