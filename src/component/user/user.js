import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Button, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import { logoutSubmit } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
	state => state.user, {
		logoutSubmit
	}
)
class User extends React.Component {
	constructor(props) {
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout() {
		const alert = Modal.alert
		alert('注销', '是否退出登录', [{
				text: '取消',
				onPress: () => console.log('cancel')
			},
			{
				text: '确认',
				onPress: () => {
					browserCookie.erase('userid')
					this.props.logoutSubmit()
				}
			},
		])
		return

	}
	render() {
		console.log(this.props)
		const Item = List.Item
		const Brief = Item.Brief
		return(
			this.props.user ? (<div>
			<Result
          img={<img src={this.props.avatar} width="60" height="60"/>}
          title={this.props.user}
          message={this.props.desc}
        />
			<List renderHeader={()=>'简介:'}>
				<Item>
					{this.props.title}
					<Brief>{this.props.desc}</Brief>
				</Item>
			</List>
			<WhiteSpace></WhiteSpace>
			<List>
				<Item>
					<Button onClick={this.logout} type="primary" >退出登录</Button>
				</Item>
			</List>
			</div>) : <Redirect to={this.props.redirectTo} />
		)
	}
}
export default User