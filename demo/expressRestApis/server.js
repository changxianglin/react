const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static('static'))
app.use(bodyParser.json())

const issues = [
  {
    id: 1, status: 'Open', owner: 'Ravan',
    created: new Date('2018-03-15'), effort: 5,
    completionDate: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2, status: 'Assigned', owner: 'Eddie',
    created: new Date('2018-03-31'), effort: 16,
    completionDate: new Date('2018-03-30'),
    title: 'Missing bottom border on panel',
  }
]

app.use('/api/issues', (req, res) => {
  const newIssue = req.body
  newIssue.id = issues.length + 1
  newIssue.created = new Date()

  if(!newIssue.status) {
    newIssue.status = 'New'
  }

  issues.push(newIssue)
  res.json(newIssue)
})

app.listen(3000, () => {
  console.log('App started on port 3000')
})
