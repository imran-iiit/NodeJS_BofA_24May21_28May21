import React ,{ Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";
import Counter from "./Counter";

export default class MainApp extends Component{

    componentDidMount(){
        console.log("called only once")
    }

    componentDidUpdate(){
        console.log("called everytime")
    }

    constructor(props){
        super(props)

        this.state={
            userdata:props.userdata
        }
    }

    deleteAllData=()=>{
        this.setState(()=>{
            return {
                userdata:[]
            }
        })
    }

    addData=(data)=>{
        this.setState((prevState) =>{
            return {
                userdata:prevState.userdata.concat(data)
            }
        })
    }

    deleteSingleData=(input) =>{
        this.setState((prevState) =>({ // These brackets are shortcut for return!!!
            userdata:prevState.userdata.filter((data) => input !== data)
        }))
    }

    render(){
        
        
const headermessage='welcome to header'
        return(
            <div>
                <Header message={headermessage}/>
                <p> Welcome to MyApp</p>
                <Footer/>
                <AddOption adddata={this.addData}/>
                <Action hasData={this.state.userdata.length > 0}/>
                
                <Options data={this.state.userdata} deleteAll={this.deleteAllData} deletesingle={this.deletesingle}/>
            </div>
        )
    }
}

MainApp.defaultProps={
    userdata:[]
}

//// Kalyani Bandi

// import React, {Component} from "react"
// import Header from "./Header";
// import Footer from "./Footer";
// import Action from "./Action";
// import AddOption from "./AddOption";
// import Options from "./Options";

// export default class MainApp extends Component{

//     componentDidMount(){
//         console.log("Called only once")
//     }

//     componentDidUpdate(){
//         console.log("Called everytime")
//     }

//     constructor(props){
//         super(props)
//         this.state = {
//             userdata : []
//         }
//     }

//     addUserData = (data) => {
//         if(!data){
//             return 'Enter Correct Value'
//         }
//         else if(this.state.userdata.indexOf(data) > -1){
//             return 'The data is alreday exist.'
//         }
//         this.setState((prevstate) => {
//             return {
//                 userdata: prevstate.userdata.concat(data)
//             }
//         })
//     }

//     deleteAllData = () => {
//         this.setState(() => {
//             return {
//                 userdata : []
//             }
//         })
//     }

//     deleteSingleData = (input) => {
//         this.setState((prevstate) => ({
//             userdata: prevstate.userdata.filter((item) => input !== item)
//         }))
//     }

//     render(){
//         const Users = ['Kalyani', 'Krithika', 'Malini', 'Ranjani'];
//         const headerMsg = "Hi I'm Header from MainApp"
//         return(
//             <div>
//                 <Header message = {headerMsg}/>
//                     <p> Welcome to MainApp</p>
//                     <Action hasData = {this.state.userdata.length > 0}/><br></br>
//                     <AddOption addUserdata = {this.addUserData}/>
//                     {/* <Options user = {Users}/> */}
//                 <Footer message = "Hi I'm Footer from Main App"/> 
//                     <Options user = {this.state.userdata}  deleteAll = {this.deleteAllData} deleteSingle = {this.deleteSingleData}/><br/>

//             </div>
//         )
//     }
// }

// MainApp.defaultProps = {
//     userdata : []
// }





// import React ,{ Component } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import AddOption from "./AddOption";
// import Action from "./Action";
// import Options from "./Options";
// import Counter from "./Counter";

// export default class MainApp extends Component{

// constructor(props){
//     super(props)

//     this.state={
//         userdata:['user-1','user-2','user-3']
//     }
// }

// deleteAllData=()=>{
// this.setState(()=>{
//     return {
//         userdata:[]
//     }
// })
// }

//     render(){
        
        
// const headermessage='welcome to header'
//         return(
//             <div>
//                 <Header message={headermessage}/>
// <p> Welcome to MyApp</p>
// <Footer/>
// <AddOption/>
// <Action hasData={this.state.userdata.length > 0}/>
 
// <Options data={this.state.userdata} deleteAll={this.deleteAllData}/>
//             </div>


//         )
//     }
// }

    // render(){
    //     const headermessage = 'This is header msg'
    //     // const userdata = ['user1', 'user2', 'user3']
    //     return(
    //         <div>
    //             <Header message={headermessage}/>
    //             <p>This is my component</p>
    //             <Footer/>
    //             <AddOption/>
    //             {/* <Options data={userdata}/> */}
    //             <Options data={this.state.userdata} deleteAll={this.deleteAllData}/>
    //             <Counter/>
    //             <Action hasData={this.state.userdata.length > 0}/>
    //         </div>
    //     )
    // }
