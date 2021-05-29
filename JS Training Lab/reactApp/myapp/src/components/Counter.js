import React, {Component} from "react";

export default class Counter extends Component{
    componentDidUpdate(){
        alert('State updated')
    }

    constructor(props){
        super(props)
        //this.inc = this.inc.bind(this) // Hence, we use the ARROW fn. in inc defn
        this.state = {
            count:0
        }
    }
    inc = () =>{
        // this.state.count = this.state.count+1 ## But this doesnt render on page
        this.setState((preState) =>{
            return {
                count:preState.count+1
            }
        }


        )
        console.log(this.state)
    }


    dec(){

    }

    res(){

    }

    render(){
        return(
            <div>
                The current state is: {this.state.count}<br/><br/>
                <button onClick={this.inc}>Increment</button>
                <button onClick={this.dec}>Decrement</button>
                <button onClick={this.res}>Reset</button>
            </div>
        )
    }
}