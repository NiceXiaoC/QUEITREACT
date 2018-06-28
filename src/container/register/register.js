import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import { register } from '../../redux/user.redux'

@connect(
	state => state.user, 
	{
		register
	}
)

class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			pwd: '',
			repeatpwd: '',
			type: 'geninus'
		}
		this.handleRegister = this.handleRegister.bind(this)
	}
	
	handleChange(key, val) {
		this.setState({
			[key]: val
		})
	}

	handleRegister() {
		this.props.register(this.state)
		console.log(this.state)
	}

	render() {
		const RadioItem = Radio.RadioItem
		return(
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
        	<List>
        		{this.props.msg ? <p>{this.props.msg}</p> : null}
        		<InputItem onChange={(v)=>this.handleChange('user',v)}>用户:</InputItem>
        		<WhiteSpace/>
        		<InputItem type='password' onChange={(v)=>this.handleChange('pwd',v)}>密码:</InputItem>
        		<InputItem type='password' onChange={(v)=>this.handleChange('repeatpwd',v)}>确认密码:</InputItem>
        		<RadioItem onChange={()=>this.handleChange('type','geninus')} checked={this.state.type === 'geninus'}>
        			牛人
        		</RadioItem>
        		<RadioItem onChange={()=>this.handleChange('type','boss')} checked={this.state.type === 'boss'}>
        			BOSS
        		</RadioItem>
        	</List>
        	<WhiteSpace/>
          <Button  type='primary' onClick={this.handleRegister}>注册</Button>
        </WingBlank>
      </div>

		)
	}
}

export default Register