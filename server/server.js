const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

const server = require('http').Server(app)

const io = require('socket.io')(server)

const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

app.listen(9999, function() {
	console.log('NODE APP')
})