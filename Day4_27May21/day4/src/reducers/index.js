

import { combineReducers } from 'redux'
import BooksReducers from './reducer_book'
import ActiveBook from './reducer_active_book'
const rootReducer= combineReducers ({
    books : BooksReducers,
    active:ActiveBook
})


export default rootReducer