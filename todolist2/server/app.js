const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ 'name': 'zhangsan'})
})

app.listen('8080', () => {
  console.log('server in port 8080')
})