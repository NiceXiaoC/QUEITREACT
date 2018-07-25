import React from 'react'
import axios from 'axios'
import {Card, WhiteSpace, WingBlank,View} from 'antd-mobile'
class Boss extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		axios.get('/user/list?type=boss').then(res=>{
			if(res.data.code === 0){
				this.setState({
					data: res.data.data
				})
			}
		})
	}
	render() {
		const Header = Card.Header
		return (
			<View style={{ paddingTop: 10 }}>
				<WingBlank>
					{
						this.state.data.map((v)=>{
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

export default Boss