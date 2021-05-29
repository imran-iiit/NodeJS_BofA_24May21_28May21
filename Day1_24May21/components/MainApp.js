import React ,{ Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";
import Counter from "./Counter";

export default class MainApp extends Component{

    render(){
        const userdata=['user-1','user-2','user-3']
        
const headermessage='welcome to header'
        return(
            <div>
                <Header message={headermessage}/>
<p> Welcome to MyApp</p>
<Footer/>
<AddOption/>
<Action/>
<Counter/>
<Options data={userdata}/>
            </div>


        )
    }
    





}