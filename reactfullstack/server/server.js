const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

const userRouter = require('./user')

app.use(bodyParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/user', userRouter)

app.get('/data', (req, res) => {
  res.json({
    'name': 'zhangsan',
    'age': '18',
  })
})

app.listen(9093, () => {
  console.log('server running in port 9093')
})