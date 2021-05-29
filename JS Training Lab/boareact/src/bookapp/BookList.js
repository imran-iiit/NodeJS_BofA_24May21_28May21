import React, { Component }  from "react"
import {connect} from 'react-redux'
import {selectBook} from '../action/UserAction'
import { bindActionCreators } from "redux"

 class BookList extends Component {
   
    renderBooks() {
        return this.props.bk.map((book) =>{
            return (
                <li
                key={book.title}
                onClick={() => this.props.sb(book)}
                className="list-group-item">
                {book.title}
                 </li>
            )
        })
    }
   render() {
return(
       <ul className="list-group col-sm-4">
       {this.renderBooks()}
       </ul>
       
    )
}
}

function mapStateToProps(state){
    return {
        bk: state.books
    }

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({sb :selectBook},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)


// import React, {Component} from "react";

// export default class BookList extends Component{
//     render(){
//         return(
//             <div>
//                 this is Book List
//             </div>
//         )
        
//     }
// }