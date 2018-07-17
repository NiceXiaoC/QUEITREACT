// 根据用户信息 返回跳转地址
export function getRedirectPath({type,avatar}) {
	console.log(type,avatar, 9999)
	// user.type / boss / genius
	// user.avatar /boosinfo / geniusinfo
	let url = (type === 'boss') ? '/boss' : '/genius'
	url += 'info'
	if(!avatar){
		url += 'info'
	}
	console.log(url)
	return url
}
