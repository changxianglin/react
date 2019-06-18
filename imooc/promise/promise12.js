const fs = require('./FileSystme')

fs.readFile('./ajax.js', 'utf-8')
  .then(content => {
    console.log(content)
  })