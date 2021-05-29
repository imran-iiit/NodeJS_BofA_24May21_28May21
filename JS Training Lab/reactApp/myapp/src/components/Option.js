//// Kalyani Bandi
import React, {Component} from "react";

const Option = (props) => {
    return(
        <div>
            <br/>
            Hi <b>{props.collectdata}</b>, This is an Option Component stateless function 
        
        <button onClick = {(e) => {props.singleDelete(props.collectdata)}} >Delete User</button>
        </div>
    )
}

export default Option


// import React  from "react";

// // Stateless
// const Option=(props) =>{

   

//         return(
//             <div>
// {
//      props.collectdata
// }
// <button 
// onClick={(e) =>{
//     props.singledelete(props.collectdata)
// }}
//     >delete</button>
// </div>
//         )
//     }
    
// export default Option


// import React, {Component} from "react";

// export default class Option extends Component{
//     render(){
//         return(
//             <div>
//                 {this.props.collectdata}
//             </div>
//         )
//     }
// }