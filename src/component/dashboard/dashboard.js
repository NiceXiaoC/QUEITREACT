import React from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import { Switch, Route } from 'react-router-dom'
import Boss from './../boss/boss'
import Genius from './../genius/genius'
import '../../index.css'

function Msg() {
	return <h2>消息列表</h2>
}

function Me() {
	return <h2>个人中心</h2>
}

@connect(
	state => state
)
class DashBoard extends React.Component {
	render() {
		const {pathname} = this.props.location.pathname==='/' ? {pathname:'/boss'} : this.props.location
		const user = this.props.user
		const navList = [{
			path: '/boss',
			text: '牛人',
			icon: 'boss',
			title: 'boss列表',
			component: Boss,
			hide: user.type === 'geninus'
		}, {
			path: '/genius',
			text: 'genius',
			icon: 'job',
			title: '牛人列表',
			component: Genius,
			hide: user.type === 'boss'
		}, {
			path: '/msg',
			text: '消息',
			icon: 'msg',
			title: '消息列表',
			component: Msg,
		}, {
			path: '/me',
			text: '我',
			icon: 'user',
			title: '个人中心',
			component: Me
		}]
		return(
			<div>
				<NavBar mode='dard' className='fixd-header'>
					{navList.find(v=>v.path===pathname).title}
				</NavBar>
				<div style={{marginTop:45}}>
					<Switch>
						{navList.map(item => <Route key={item.path} path={item.path} component={item.component}></Route>)}
					</Switch>
				</div>
				<NavLinkBar data={navList}></NavLinkBar>
			</div>

		)
	}
}

export default DashBoard