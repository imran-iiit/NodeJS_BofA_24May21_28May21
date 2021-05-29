import React from 'react'
import ReactDOM from 'react-dom'
import MAinApp from './components/MainApp'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
<Provider store ={createStoreWithMiddleware(reducers)}>
<MainApp/>
</Provider>
,
    document.getElementById('app')
    )

// import React from 'react'
// import ReactDom from 'react-dom'
// import MainApp from './containers/Weather_list'

// ReactDom.render(
//     <MainApp/>,
//     document.getElementById('app') // Same from index.html

// )