import React from 'react'
import Logo from '../../component/logo/logo'
import {Redirect} from 'react-router-dom'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'

@connect(
	state=>state.user,
	{login}
)
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			pwd: ''
		}
		this.register = this.register.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}
	handleChange(key, val) {
		this.setState({
			[key]: val
		})
	}
	register() {
		this.props.history.push('/register')
	}
	handleLogin() {
		this.props.login(this.state)
	}
	render() {
		return(
			<div>
			{this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <h2 style={{'textAlign':'center'}}>登录页面</h2>
        <WingBlank>
        	<List>
        	{this.props.msg ? <p>{this.props.msg}</p> : null}
        		<InputItem onChange={v=>this.handleChange('user',v)}>用户:</InputItem>
        		<WhiteSpace/>
        		<InputItem onChange={v=>this.handleChange('pwd',v)}>密码:</InputItem>
        	</List>
          <Button type='primary' onClick={this.handleLogin}>登陆</Button>
          <WhiteSpace/>
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
		)
	}
}

export default Login