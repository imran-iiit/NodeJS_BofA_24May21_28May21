import template from "babel-template";
import React, {Component} from "react";
import {} from 'react-redux'
import { connect } from "react-redux";

class BookDetails extends Component{
    render(){
        if(!this.props.book){
            return <div>Select a book to get started</div>
        }

        return (
            <div>
                <h2>Book details</h2>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.nop}</div>
                <div>Publication: {this.props.book.publication}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        book: state.active
    }
}

export default connect(mapStateToProps)(BookDetails)