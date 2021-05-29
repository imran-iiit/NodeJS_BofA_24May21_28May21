import React from "react";
import Option from "./Option";


const Options =(props) =>{

     return(
            <div>
<button onClick={props.deleteAll}>Delete All</button>
                {
             props.data.map((localdata) =><Option key= {localdata} collectdata={localdata}
             singledelete={props.deletesingle}
             /> )
                }
            
            
            </div>


        )
    }
    
export default Options




