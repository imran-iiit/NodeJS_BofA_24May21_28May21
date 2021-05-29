import React  from "react";
import RestApp from "./RestApp";


const Option=(props) =>{

   

        return(
            <div>
{
     props.collectdata
}
<button 
onClick={(e) =>{
    props.singledelete(props.collectdata)
}}
    >delete</button>



        
</div>
        )
    }
    
export default Option



