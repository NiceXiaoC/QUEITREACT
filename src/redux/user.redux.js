import axios from 'axios'
import {getRedirectPath} from './util'
const REGISTER_USCCESS = 'REGISTER_USCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
	redirectTo: '',
	isAuth: '',
	msg: '',
	user: '',
	pwd: '',
	type: ''
}

// reduce
export function user(state = initState, action) {
	switch(action.type) {
		case REGISTER_USCCESS:
			return { 
				...state,
				msg: '',
				redirectTo: getRedirectPath(action.payload),
				isAuth:true,
				...action.payload
			}
		case ERROR_MSG:
		return{
			...state,
			isAuth:false,
			msg: action.msg
		}
		default:
			return state
	}

}

function registerSuccess(data) {
	return {
		type: REGISTER_USCCESS,
		payload: data
	}
}

function errorMsg(msg) {
	return {
		msg,
		type: ERROR_MSG
	}
}

export function register({
	user,
	pwd,
	repeatpwd,
	type
}) {
	
	console.log(user,pwd,repeatpwd,type)
	
	if(!user || !pwd || !type) {
		return errorMsg('用户或密码必须输入')
	}

	if(pwd !== repeatpwd) {
		return errorMsg('密码和确认密码必须一致')
	}
	return dispatch => {
		axios.post('/user/register', {
			user,
			pwd,
			type
		}).then(res => {
			if(res.status === 200 && res.data.code === 0) {
				dispatch(registerSuccess(user, pwd, type))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}