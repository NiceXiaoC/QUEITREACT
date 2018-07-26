import React from 'react'
import Logo from '../../component/logo/logo'
import { Redirect } from 'react-router-dom'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'

/**
 *	高阶组件：
 * 		属性代理&反向继承
 * 
 **/
function WrapperHello(Comp) {
	
	// 反向继承
	class WrapComp extends Comp {
		componentDidMount() {
			console.log('反向继承,改写生命周期')
		}
		render() {
			return <Comp />
		}
	}

	// 属性代理
	//	class WrapComp extends React.Component{
	//		render() {
	//			return (
	//				<div>
	//					<p>这是高阶组件特有的元素</p>
	//					<Comp {...this.props}></Comp>
	//				</div>
	//			)
	//		}
	//	}
	return WrapComp
}

@WrapperHello
class Hello extends React.Component {
	render() {
		return <h2>hello xiaoC I love you !!</h2>
	}
}

@connect(
	state => state.user, {
		login
	}
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
			<Hello />
			{this.props.redirectTo && this.props.redirectTo!=='/login' ? <Redirect to={this.props.redirectTo} /> : null}
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