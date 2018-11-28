const router = require('express').Router()
const axios = require('axios')

const baseUrl = 'http://cnodejs.org/api/v1'

router.post('/login', (req, res, next) => {
  axios.post(`${baseUrl}/accesstoken`, {
    accesstoken: req.accessToken
  }).then(resp => {
    if(resp.status === 200 && resp.data.success) {
      req.session.user = {
        accessToken: resp.body.accessToken,
        loginName: resp.body.loginname,
        id: resp.body.id,
        avatarUrl: resp.body.avatarUrl
      }
      res.json({
        sucess: true,
        data: resp.data
      })
    }
  }).catch(err => {
    if(err.response) {
      res.json({
        success: false,
        data: err.response
      })
    } else {
      next(err)
    }
  })
})

module.exports = router
