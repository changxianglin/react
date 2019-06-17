const fs = require('fs')
const express  = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/ajax', function(req, res) {
  var file = fs.readFileSync('./index.html').toString()
  console.log(file)
  res.send(file)
})

app.get('/', function(req, res) {
  res.json({
    status: '200',
    data: {},
    msg: 'server running!'
  })
})

app.get('/boo', function(req, res) {
  res.json({
    status: '200',
    data: {
      url: 'boo'
    },
    msg: 'success' 
  })
})

app.get('/bar', function(req, res) {
  res.json({
    status: '200',
    data: {
      url: 'bar'
    },
    msg: 'success' 
  })
})

app.get('/foo', function(req, res) {
  res.json({
    status: '200',
    data: {
      url: 'foo'
    },
    msg: 'success' 
  })
})

app.listen(8080, () => {
  console.log('app running in port 8080')
})