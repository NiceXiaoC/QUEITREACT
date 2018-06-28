const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

// 查找所有的用户信息
Router.get('/list', function(req, res) {
	User.find({}, function(err, data) {
		return res.json(data)
	})
})

// 注册
Router.post('/register', function(req, res) {
	console.log(req.body)
	const {
		user,
		pwd,
		type
	} = req.body
	
	User.findOne({user},function(err,doc){
		if (doc) {
			return res.json({code:1,msg: '该用户已存在'})
		}
		User.create({user,pwd,type},function(e,d){
			if(e) {
				return res.json({code:1 ,msg: '服务器异常'})
			}
			return res.json({code:0,msg:'注册成功'})
		})
	})
})

Router.get('/info', function(req, res) {
	return res.json({
		code: 1
	})
})

module.exports = Router