import React, { Component }  from "react"
import BookList from "./BookList"
import BookDetails from "./BookDetails"

export default class BookStore extends Component {
    render() {

    
    return(
        <div>
        <BookList/>
        <BookDetails/>
        </div>
    )
}
}