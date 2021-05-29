import React, {Component} from "react";
import BookDetails from "./BookDetails";
import BookList from "./BookList";

export default class BookStore extends Component{
    render(){
        return(
            <div>
                <p>this is BookStore</p>
                <BookDetails/>
                <BookList/>
            </div>
        )
        
    }
}



// import React, { useState }  from "react"
// import BookDetails from "./BookDetails"
// import BookList from "./BookList"

// const BookStore = (props) => {
    
//     return(
//         <div>
//             <p>This is book store</p>
//             <BookList/>
//             <BookDetails></BookDetails>
//         </div>
//     )
// }
// export default BookStore



// import React, { useState }  from "react"

// const BookList = (props) => {
    
//     return(
//         <div>
//             This is Book List
//         </div>
//     )
// }
// export default BookList


// import React, { useState }  from "react"

// const BookDetails = (props) => {
    
//     return(
//         <div>
//             This is Book List
//         </div>
//     )
// }
// export default BookDetails