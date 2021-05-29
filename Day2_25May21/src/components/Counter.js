import React ,{ Component } from "react";


export default class Counter extends Component{

componentDidUpdate(){
    alert('state is updted')
}

    constructor(props){
        super(props)
        //this.inc= this.inc.bind(this)
        this.state={
            count:0
        }
    }
    inc =()=>{
///this.state.count= this.state.count+1
this.setState((preState)=>{
return {
    count:preState.count+1
}
})
console.log(this.state)
    }
    dec(){

    }
    res(){

    }
    render(){

        return(
<div>
    The current is :{this.state.count} <br/><br/><br/>
<button onClick={this.inc}>Increment</button>
<button onClick={this.dec}>decrement</button>
<button onClick={this.res}>reset</button>
</div>

        )
    }
    





}