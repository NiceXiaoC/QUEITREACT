import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import Geniusinfo from './container/geniusinfo/geniusinfo'
import DashBoard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'

class App extends React.Component{
	render(){
		return(
		<div>
      	<AuthRoute></AuthRoute>
      	<Switch>
	        <Route path="/bossinfo" component={BossInfo}></Route>
	        <Route path="/geniusinfo" component={Geniusinfo}></Route>
	        <Route path="/login" component={Login}></Route>
	        <Route path="/register" component={Register}></Route>
	        <Route path="/chat/:user" component={Chat}></Route>
	        <Route component={DashBoard}></Route>
        </Switch>
      </div>
     )
	}
}

export default App