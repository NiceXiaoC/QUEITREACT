import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userInfo } from '../../redux/user.redux'

@connect(
	state => state.user,
	{userInfo}
)
class AuthRoute extends React.Component {
	componentDidMount() {
		const publicList = ['/login','/register']
		const pathName = this.props.history.location.pathname
		// 判断是否是login or register
		if(publicList.indexOf(pathName) > -1){
			return null
		}
		axios.get('/user/info').then(res => {
			if(res.status === 200 && res.data.code === 0) {
				// 有登录信息
				this.props.userInfo(res.data.data)
			} else {
				this.props.history.push('/login')
			}
		})
		// 获取用户信息
		
		// 是否登录
		// 现在的url地址 login是不需要跳转的
		// 用户的type 身份boss or 牛人
		// 用户信息是否完整（选择图像 个人简历）
	}
	render() {
		return null
	}
}

export default withRouter(AuthRoute)