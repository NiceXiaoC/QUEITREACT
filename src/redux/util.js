// 根据用户信息 返回跳转地址
export function getRedirectPath({type,avatar}) {
	// user.type / boss / genius
	// user.avatar /boosinfo / geniusinfo
	let url = (type === 'boss') ? '/boss' : '/genius'
	if(!avatar){
		url += 'info'
	}
	return url
}
