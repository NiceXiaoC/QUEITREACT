import React from 'react'
import { Grid } from 'antd-mobile'

class AvatarSelector extends React.Component {
	render() {
		const data = Array.from(new Array(9)).map((_val, i) => ({
		  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
		  text: `name${i}`,
		}))
		const data1 = Array.from(new Array(9)).map(() => ({
		  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
		}))
		return(
			<div>
    		<Grid data={data} activeStyle={false} columnNum={5} onClick={ele=>{
    			this.props.selectAvatar(ele.text,ele)
    		}}/>
			</div>
		)
	}
}

export default AvatarSelector