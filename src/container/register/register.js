import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import { register } from '../../redux/user.redux'
import higherFrom from '../../component/higher-from/higher-from'

@connect(
	state => state.user, 
	{
		register
	}
)

@higherFrom
class Register extends React.Component {
	constructor(props) {
		super(props)
		this.handleRegister = this.handleRegister.bind(this)
	}
	componentDidMount(){
		this.props.handleChange('type','genius')
	}
	handleRegister() {
		this.props.register(this.props.state)
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
        		<InputItem onChange={(v)=>this.props.handleChange('user',v)}>用户:</InputItem>
        		<WhiteSpace/>
        		<InputItem type='password' onChange={(v)=>this.props.handleChange('pwd',v)}>密码:</InputItem>
        		<InputItem type='password' onChange={(v)=>this.props.handleChange('repeatpwd',v)}>确认密码:</InputItem>
        		<RadioItem onChange={()=>this.props.handleChange('type','genius')} checked={this.props.state.type === 'genius'}>
        			牛人
        		</RadioItem>
        		<RadioItem onChange={()=>this.props.handleChange('type','boss')} checked={this.props.state.type === 'boss'}>
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