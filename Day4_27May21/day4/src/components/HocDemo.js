import React, { Component } from 'react'


var userInfo={
    userdata: 'user details goes here'
}
var MyApp= ComposedComponent => class extends Component{
   
    componentDidMount(){
        this.setState({
            userdata : userInfo.userdata
        })
    }
    render(){
        return(
            <ComposedComponent { ...this.props} {...this.state} />
        )
    }

}
class MyComponent extends Component {
    render(){

        return(
            <div>
                <h3>{this.props.userdata}</h3>
            </div>
        )
    }
}

export default MyApp(MyComponent)