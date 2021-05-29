import React ,{ Component } from "react";


export default class AddOption extends Component{

    addUser=(e)=>{
        e.preventDefault()
        const data= e.target.elements.userdata.value
         this.props.adddata(data)
        //alert(data)
    }
    render(){

        return(
 
<div>
    <form onSubmit={this.addUser}>
        Name:<input type='text' name='userdata'  class="form-control"/>
    <button class="btn btn-primary">Add User</button>
    </form>
    
</div>
        )
    }
    





}