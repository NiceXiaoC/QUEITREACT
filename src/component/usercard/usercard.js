import React from 'react'
import PropTypes from 'prop-types'
import { Card, WingBlank, View } from 'antd-mobile'

class UserCard extends React.Component {
	static propTypes = {
		userList: PropTypes.array.isRequired
	}
	render() {
		return(
			<View style={{ paddingTop: 10 }}>
				<WingBlank>
					{
						this.props.userList.map((v)=>{
							return (
								<Card key={v._id}>
			            <Card.Header
			              title={v.user} 
			              thumbStyle={{ width: 30, height: 30 }}
			              thumb={v.avatar}
			              extra={v.title}
			            />
			            <Card.Body>
			                <span>{v.desc}</span>
			            </Card.Body>
			          </Card>
							)
						})
					}
				</WingBlank>
			</View>
		)
	}
}

export default UserCard