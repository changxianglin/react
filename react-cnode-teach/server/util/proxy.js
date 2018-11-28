const axios = require('axios')

const baseUrl = 'http://cnodejs.org/api/v1'

module.exports = function (req, res, next) {
  const path = req.path
  const user = req.session.user || {}
  const needAccessToken = req.query.needAccessToken

  if(needAccessToken && user.accessToken) {
    res.status(401).send({
      success: false,
      msg: 'need login'
    })
  }

  const query = Object.assign({}, req.query)
  if(query.needAccessToken) delete query.needAccessToken

  axios(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    data:Object.assign({}, req.body, {
      accessToken: user.accessToken
    }),
    header: {
      'Content-Type': 'application/x-www-form-urlencode'
    }
  })
}
