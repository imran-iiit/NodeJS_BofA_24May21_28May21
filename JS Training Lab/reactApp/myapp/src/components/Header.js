// import React, {Component} from "react";

// export default class Header extends Component{
//     render(){
//         return(

//              <p>{this.props.message}</p>

//         )
//     }
// }


// Converting to Stateless functional form
import React from "react";
import Action from "./Action";

const Header = (props) =>{
    return(
        <p> {props.message} </p>
    )
}

export default Header