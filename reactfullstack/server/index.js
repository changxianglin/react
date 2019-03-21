const express = require('express')
const app = express()

app.get('/data', (req, res) => {
  res.json({
    'name': 'zhangsan',
    'age': '18',
  })
})

app.listen(9093, () => {
  console.log('server running in port 9093')
})