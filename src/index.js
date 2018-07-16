import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import reducers from './reducer'
import './config'

import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import Boss from './container/bossinfo/bossinfo'

const store = createStore(reducers, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
      	<AuthRoute></AuthRoute>
        <Route path="/bossinfo" component={Boss}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();