import React ,{ Component } from "react";
import Option from "./Option";


export default class Options extends Component{

    render(){

        return(
            <div>

                {
             this.props.data.map((localdata) =><Option key= {localdata} collectdata={localdata}/> )
                }
            
            
            </div>


        )
    }
    





}