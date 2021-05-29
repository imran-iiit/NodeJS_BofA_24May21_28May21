
///// Kalyani Bandi
import React from "react";
import Option from "./Option";


const Options = (props) => {
    return(
        <div>
            {/* {props.user.map((senddata) =>  <div key = {senddata}> <p> Hi {senddata} from stateless function</p> </div>)} */}
           {
               props.user.map((senddata) => <Option key={senddata} collectdata = {senddata} singleDelete = {props.deleteSingle}/>)
           }
           <button onClick = {props.deleteAll}>Delete All</button>
        </div>
    )
}

export default Options

// import React from "react";
// import Option from "./Option";

// // Making this stateless
// const Options =(props) =>{

//      return(
//             <div>
// <button onClick={props.deleteAll}>Delete All</button>
//                 {
//              props.data.map((localdata) =><Option key= {localdata} collectdata={localdata}
//              singledelete={props.deletesingle}
//              /> )
//                 }
            
            
//             </div>


//         )
//     }
    
// export default Options



// import React, {Component} from "react";
// import Option from "./Option";

// export default class Options extends Component{

//     render(){

//         return(
//             <div>
// <button onClick={this.props.deleteAll}>Delete All</button>
//                 {
//              this.props.data.map((localdata) =><Option key= {localdata} collectdata={localdata}/> )
//                 }
            
            
//             </div>


//         )
//     }

// export default class Options extends Component{
//     render(){
//         return(
//             // key={localdata} to get rid of the console error to identify the iterated data 
//             // to keep track if there is a deletion to update the hash
//             <div>
//                 <button onClick={this.props.deleteAll}>Delete All</button>
//                 {
//                     this.props.data.map((localdata) => <Option key={localdata} collectdata={localdata}/>)
//                 }
//             </div>
//         )
//     }
// //}