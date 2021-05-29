import React from 'react'
 import ReactDOM from 'react-dom'
import  {Provider} from 'react-redux'
 import BookStore from './bookapp/BookStore'
 import {createStore} from 'redux'
 import reducers from './reducers'

ReactDOM.render(
    <Provider store ={createStore(reducers)}>
    <BookStore/>
    </Provider>
     ,
     document.getElementById("app")
 )

