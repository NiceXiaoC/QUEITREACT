import React from 'react'
import {connect} from 'react-redux'
import {List,Badge} from 'antd-mobile'

@connect(
	state=>state
)
class Msg extends React.Component{
	getLast(arr){
		return arr[arr.length-1]
	}
	render() {
		if(!this.props.chat.chatmsg.length) return null
		const Item = List.Item
		const Brief = Item.Brief
		const userid = this.props.user._id
		const msgGroup = {}
		this.props.chat.chatmsg.forEach(v=>{
			msgGroup[v.chatid] = msgGroup[v.chatid] || []
			msgGroup[v.chatid].push(v)
		})
		const chatList = Object.values(msgGroup).sort((a,b)=>{
			const a_last = this.getLast(a).create_time
			const b_last = this.getLast(b).create_time
			return b_last - a_last
		})
		
		return (
			<div>
					{
						chatList.map(v=>{
							const lastItem = this.getLast(v)
							const targetid = lastItem.from === userid ? lastItem.to : lastItem.from
							const unReadNum = v.filter(v=>!v.read&&v.to===userid).length
							return (
								<List key={lastItem._id}>
									<Item 
										extra={<Badge text={unReadNum}></Badge>}
										thumb={this.props.chat.users[targetid].avatar}
										arrow='horizontal'
										onClick={()=>{
											this.props.history.push(`/chat/${targetid}`)
										}}
									>
										{lastItem.content}
										<Brief>用户名:{this.props.chat.users[targetid].name}</Brief>
								</Item>
							</List>
							)
						})
					}
				
			</div>
		)
	}
}

export default Msg