import React, {Component} from "react";

export default class AddOption extends Component{
    addUser(e){
        e.preventDefault()
        const data = e.target.elements.userdata.value
        alert(data)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addUser}>
                    Name:<input type='text' name='userdata'/>
                    <button>Add User</button>
                </form>
            </div>

            // <form onSubmit={this.addUser}>
            //     Name:<input type='text' name='userdata'/>
            //  <button onClick={this.addUser}>Add User</button>
            // </form>
        )
    }
}