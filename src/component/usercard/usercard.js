import React from 'react'
import PropTypes from 'prop-types'
import { Card, WingBlank, View } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
class UserCard extends React.Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  }
  handelclick(v) {
    this.props.history.push(`/chat/${v._id}`)
  }
  render() {
    return(
      <View style={{ paddingTop: 10 }}>
				<WingBlank>
					{
						this.props.userList.map((v)=>{
							return (
								<Card 
								  key={v._id}
								  onClick={()=>this.handelclick(v)}
								>
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

export default withRouter(UserCard)