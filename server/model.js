const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)

mongoose.connection.on('connected', function() {
	console.log('数据库链接成功')
})


const models = {
	user: {
		'user': {type:String,require:true},
		'pwd': {type:String,require:true},
		'type': {type:String,require:true},
		// 图像
		'avatar': {type:String},
		// 简介
		'desc': {type:String},
		// 职位名
		'title': {type:String},
		'company': {type: String}
	},
	chat: {
		'chatid': {type:String,require:true},
		'from': {type:String,require:true},
		'to':{type:String,require:true},
		'read':{type:Boolean,default:false},
		'content':{type:String,require:true,default:''},
		'create_time':{type:Number,default: new Date().getTime()}
	}
}

for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel: function(name){
		return mongoose.model(name)
	}
}




