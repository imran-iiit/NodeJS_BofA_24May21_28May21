import React ,{ Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";
import Counter from "./Counter";

export default class MainApp extends Component{

componentDidMount(){

    try{
const json = localStorage.getItem('mydata')
const userdata= JSON.parse(json)
if(userdata){
    this.setState(() => ({userdata}))
}
    }catch(e){}


 }
componentDidUpdate(){
    

const json= JSON.stringify(this.state.userdata)
localStorage.setItem('mydata',json)

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
this.setState((prevState) =>({
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
        userdata:['admin','manager','users']
    }