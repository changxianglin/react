const express = require('express')

const app = express()
app.use(express.static('static'))

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
  const metadata = {total_count: issues.length}
  res.json({_metadata: metadata, records: issues})
})

app.listen(3000, () => {
  console.log('App started on port 3000')
})
