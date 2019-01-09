const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')

const svg = fs.readFileSync('svg.text').toString()

app.use(cors())

var corsOptions = {
  origin: 'http://localhost:3000'
}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/svg', cors(corsOptions), (req, res) => res.json(
  {msg: svg}
))

app.listen(5000, () => console.log('Example app listening on port 3000!'))
