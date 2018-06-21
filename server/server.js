const express = require('express')
const userRouter = require('./user')
const app = express()

app.use('/user', userRouter)

app.listen(9999, function() {
	console.log('NODE APP')
})