const express = require('express')
const app = express()

const port = 5000
const start = () => {
  console.log('app running 5000 port')
}

let data = {
  "name": 'zhangsan',
  "age": 27,
  "gender": "male",
  "timer": Math.random().toFixed(2) * 100
}

let data1 = {
  "name": 'lisi',
  "age": 23,
  "gender": 'female',
  "timer": Math.random().toFixed(1) * 10
}

app.get('/api/test/:testId', (req, res) => {
  console.log(req.params)
  res.send(data)
})

app.get('/api/test', (req, res) => {
  res.send(data)
})

app.post('/api/foo/:fooId', (req, res) => {
  res.send(data1)
})


app.listen(port, start())