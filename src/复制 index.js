import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import reducers from './reducer'
import './config'
import 'antd-mobile/dist/antd-mobile.css'

import App from './app'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import Geniusinfo from './container/geniusinfo/geniusinfo'
import DashBoard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
// const store = createStore(reducers, applyMiddleware(thunk))
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App></App>
//    <div>
//    	<AuthRoute></AuthRoute>
//    	<Switch>
//	        <Route path="/bossinfo" component={BossInfo}></Route>
//	        <Route path="/geniusinfo" component={Geniusinfo}></Route>
//	        <Route path="/login" component={Login}></Route>
//	        <Route path="/register" component={Register}></Route>
//	        <Route path="/chat/:user" component={Chat}></Route>
//	        <Route component={DashBoard}></Route>
//      </Switch>
//    </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();