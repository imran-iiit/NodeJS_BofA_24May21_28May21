import React ,{ Component } from "react";


export default class Action extends Component{

    render(){

        return(
            <div>
<p> Welcome to Action</p>

<button disabled={!this.props.hasData}>Delete</button>
</div>
        )
    }
    





}


// import React, {Component} from "react";

// export default class Action extends Component{
//     // render(){
//     //     return(
//     //         <div>
//     //          <p>This is my Action</p>
//     //          <button disabled={!this.props.hasData}>Delete</button>
//     //         </div>
//     //     )
//     // }

//     render(){

//         return(
//             <div>
//                 <p> Welcome to Action</p>
    
//                 <button disabled={!this.props.hasData}>Delete</button>
//             </div>
//         )
//     }
// }


