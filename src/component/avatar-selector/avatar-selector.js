import React from 'react'
import { Grid, List} from 'antd-mobile'

class AvatarSelector extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			icon: '',
			text: ''
		}
	}
	getAvatar(item) {
		this.setState(item)
	  this.props.selectAvatar(item.text,item)
	}
	render() {
		const data = Array.from(new Array(9)).map((_val, i) => ({
		  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
		  text: `name${i}`,
		}))
		const gridHeader = this.state.text 
			? (<div>
			<span>已选择头像</span>
			<img style={{width:20}} src={this.state.icon} alt="" />
			</div>) : (<div>请选择图片</div>)
		return(
			<div>
				<List renderHeader={()=>gridHeader}>
				</List>
				<Grid data={data} activeStyle={false} columnNum={5} onClick={ele=>{
	    			this.getAvatar(ele)
	    		}}/>
			</div>
		)
	}
}

export default AvatarSelector