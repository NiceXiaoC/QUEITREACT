// 根据用户信息 返回跳转地址
export function getRedirectPath({type,avatar}) {
	// user.type / boss / genius
	// user.avatar /boosinfo / geniusinfo
	console.log(type,111)
	let url = (type === 'boss') ? '/boss' : '/genius'
	if(!avatar){
		url += 'info'
	}
	return url
}

export function getChatId(userId,targetId){
	return [userId,targetId].sort().join('_')
}
