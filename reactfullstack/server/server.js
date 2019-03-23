const express = require('express')

const app = express()

const userRouter = require('./user')

app.use('/user', userRouter)

app.get('/data', (req, res) => {
  res.json({
    'name': 'zhangsan',
    'age': '18',
  })
})

app.use

app.listen(9093, () => {
  console.log('server running in port 9093')
})