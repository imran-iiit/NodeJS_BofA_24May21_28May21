import React ,{ Component } from "react";


export default class Footer extends Component{

    constructor(props){
        super(props)
        this.state={displayInfo :false}
    }

toggleInfo=()=>{
    this.setState({
        displayInfo: !this.state.displayInfo
    })
}
render(){

        return(
<div>
    <h3>User details goes here</h3>
    {
        this.state.displayInfo ? (
            <div>
                <p>
<h2>For the first time ever, Bootstrap has its own open source SVG icon library, designed to work best with our components and documentation.

Bootstrap Icons are designed to work best with Bootstrap components, but they’ll work in any project. They’re SVGs, so they scale quickly and easily, can be implemented in several ways, and can be styled with CSS.</h2>
                </p>
                <button onClick={this.toggleInfo}>show less</button>
                </div>
        
        ):(
            <div>
                
                <button onClick={this.toggleInfo}>Read More</button>
                
                 </div>
        )
    }
</div>

        )
    }
    





}