import React ,{ Component } from "react";


export default class Action extends Component{

    render(){

        return(
            <div>
<p> Welcome to Action</p>

<button className='btn btn-danger' disabled={!this.props.hasData}>Delete</button>
</div>
        )
    }
    





}