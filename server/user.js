const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function(req, res) {
	// 查找所有的用户信息
	User.find({}, function(err, data) {
		return res.json(data)
	})
})

Router.get('/info', function(req, res) {
	return res.json({
		code: 1
	})
})

module.exports = Router