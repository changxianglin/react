const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./config')
const User = model.getModel('user')

Router.get('/list', (req, res) => {
  User.find({}, (err, doc) => {
    return res.json(doc)
  })
})

Router.post('/register', (req, res) => {
  console.log(req.body)
  const { user, pwd, type } = req.body
  User.findOne({user: user}, (err, doc) => {
    if(doc) {
      return res.json({code: 1, msg: '用户名已存在'})
    }
    User.create({user, type, pwd: md5Pwd(pwd)}, (e, d) => {
      if(e) {
        return res.json({code: 1, msg: '后台出错了'})
      }
      return res.json({code: 0})
    })
  })
})

Router.get('/info', (req, res) => {
  return res.json({code: 1})
})

function md5Pwd(pwd) {
  const salt = Math.random()
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router