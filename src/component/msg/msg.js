import React from 'react'
import {connect} from 'react-redux'
import {List} from 'antd-mobile'

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
		console.log(userid, 99999999999999999)
		const msgGroup = {}
		this.props.chat.chatmsg.forEach(v=>{
			msgGroup[v.chatid] = msgGroup[v.chatid] || []
			msgGroup[v.chatid].push(v)
		})
		const chatList = Object.values(msgGroup)
		console.log(msgGroup, 888)
		return (
			<div>
				<List>
					{
						chatList.map(v=>{
							const lastItem = this.getLast(v)
							console.log(v,'--------')
							const targetid = lastItem.from === userid ? lastItem.to : lastItem.from
							console.log(targetid, 888888)
							console.log(lastItem)
							return (
								<Item 
									key={lastItem._id}
								>
									{lastItem.content}
									<Brief>用户名:{this.props.chat.users[targetid].name}</Brief>
							</Item>
							)
						})
					}
				</List>
			</div>
		)
	}
}

export default Msg