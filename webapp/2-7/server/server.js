const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const serverEntry = require('../dist/server-entry').default
const app = express()

const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

app.use('/public', express.static(path.join(__dirname, '../dist')))

app.get("*", function(req, res) {
    const appString = ReactSSR.renderToString(serverEntry)
    res.send(template.replace('<app></app>', appString))
})

app.listen(3333, function() {
    console.log('server is listening on 3333')
})