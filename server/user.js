const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const Chat = model.getModel('chat')

const _filter = {
	'pwd': 0,
	'__v': 0
}

// 删除所有用户信息
Router.get('/del', function(req, res) {
	User.remove({}, function(err, data) {
		return res.json(data)
	})
	Chat.remove({}, function(err, data) {
		return res.json(data)
	})
})

// 查找所有的用户信息
Router.get('/list', function(req, res) {
	const {
		type
	} = req.query
	//	User.remove({},function(err,data){})
	if(type) {
		User.find({
			type
		}, function(err, data) {
			return res.json({
				code: 0,
				data: data
			})
		})
	} else {
		User.find({}, function(err, data) {
			return res.json({
				code: 0,
				data: data
			})
		})
	}
})

Router.post('/readmsg',function(req,res){
	const userid = req.cookies.userid
	const {from} = req.body
	console.log(from,userid, 99999)
	Chat.update({from,to:userid},{'$set':{read:true}},{'multi':true},function(err,doc){
		console.log(doc)
		if(!err){
			return res.json({code:0,num:doc.nModified})
		}
		return res.json({code:1,msg:'修改失败'})
	})
})

Router.get('/getchatList',function(req,res){
	Chat.find({},function(err,doc){
		return res.json({
			data: doc
		})
	})
})

Router.get('/getmsgList', function(req, res) {
	const user = req.cookies.userid
	console.log(1111111111111111)
	console.log(user)
	console.log(2222222222222222)
	User.find({}, function(e, userdoc) {
		let users = {}
		userdoc.forEach(v => {
			users[v._id] = {
				name: v.user,
				avatar: v.avatar
			}
		})
		// {'$on':[{from:user,to:user}]}
		Chat.find({'$or':[{from:user},{to:user}]}, function(err, doc) {
			if(!err) {
				return res.json({
					code: 0,
					msgs: doc,
					users: users
				})
			}
		})
	})
	
})

Router.post('/update', function(req, res) {
	const userid = req.cookies.userid
	if(!userid) {
		return res.json({
			code: 1,
			msg: '用户信息过期，请重新登录'
		})
	}
	const body = req.body
	User.findByIdAndUpdate(userid, body, function(err, doc) {
		const data = Object.assign({}, {
			user: doc.user,
			type: doc.type
		}, body)
		return res.json({
			code: 0,
			data
		})
	})
})

// login
Router.post('/login', function(req, res) {
	const {
		user,
		pwd
	} = req.body
	User.findOne({
		user,
		pwd: md5Pwd(pwd)
	}, _filter, function(err, doc) {
		console.log(err, doc)
		if(!doc) {
			return res.json({
				code: 1,
				msg: '用户名活密码错误'
			})
		}
		res.cookie('userid', doc._id)
		return res.json({
			code: 0,
			msg: '成功',
			data: doc
		})
	})
})

// 注册
Router.post('/register', function(req, res) {
	const {
		user,
		pwd,
		type
	} = req.body
	console.log({
		user
	})
	User.findOne({
		user
	}, function(err, doc) {
		if(doc) {
			return res.json({
				code: 1,
				msg: '该用户已存在'
			})
		}
		const userModel = new User({
			user,
			type,
			pwd: md5Pwd(pwd)
		})
		userModel.save(function(e, d) {
			if(e) {
				return res.json({
					code: 1,
					msg: '服务器异常'
				})
			}
			const {
				user,
				type,
				_id
			} = d
			res.cookie('userid', _id)
			return res.json({
				code: 0,
				msg: '注册成功',
				data: {
					user,
					type,
					_id
				}
			})
		})
	})
})

// 获取用户是否登录
Router.get('/info', function(req, res) {
	// 获取cookie 信息
	const {
		userid
	} = req.cookies
	if(!userid) {
		return res.json({
			code: 1
		})
	}
	User.findOne({
		_id: userid
	}, _filter, function(err, doc) {
		if(err) {
			return res.json({
				code: 1,
				msg: '未知错误'
			})
		}
		if(doc) {
			return res.json({
				code: 0,
				data: doc
			})
		}
	})
})

// 加密
function md5Pwd(pwd) {
	const salt = 'fanfan_good_9527$@23asdc0098**'
	return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router