import React from 'react'
import Logo from '../../component/logo/logo'
import { Redirect } from 'react-router-dom'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login, resetReg } from '../../redux/user.redux'
import higherFrom from '../../component/higher-from/higher-from'

@connect(
	state => state.user, {
		login,
		resetReg
	}
)

@higherFrom
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.register = this.register.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}
	register() {
		this.props.resetReg()
		this.props.history.push('/register')
	}
	handleLogin() {
		this.props.login(this.props.state)
	}
	render() {
		return(
			<div>
			{this.props.redirectTo && this.props.redirectTo!=='/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <h2 style={{'textAlign':'center'}}>登录页面</h2>
        <WingBlank>
        	<List>
        	{this.props.msg ? <p>{this.props.msg}</p> : null}
        		<InputItem onChange={v=>this.props.handleChange('user',v)}>用户:</InputItem>
        		<WhiteSpace/>
        		<InputItem onChange={v=>this.props.handleChange('pwd',v)}>密码:</InputItem>
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