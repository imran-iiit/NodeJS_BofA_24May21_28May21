
import { combineReducers } from 'redux'
import BookReducers from './reducer_book'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
    books: BookReducers,
    active: ActiveBook
})

export default rootReducer