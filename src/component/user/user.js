import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Button } from 'antd-mobile'

@connect(
	state => state.user
)
class User extends React.Component {
	render() {
		const Item = List.Item
		const Brief = Item.Brief
		return(
			<div>
			<Result
          img={<img src={this.props.avatar} width="60" height="60"/>}
          title={this.props.user}
          message={this.props.desc}
        />
			<List renderHeader={()=>'简介:'}>
				<Item>
					{this.props.title}
					<Brief>{this.props.desc}</Brief>
				</Item>
			</List>
			<WhiteSpace></WhiteSpace>
			<List>
				<Item>
					<Button type="primary">退出登录</Button>
				</Item>
			</List>
			</div>
		)
	}
}
export default User