const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./config')
const User = model.getModel('user')
const _filter = { 'pwd': 0, '__v': 0}

Router.get('/list', (req, res) => {
  // User.remove({}, (e, d) => {})
  User.find({}, (err, doc) => {
    return res.json(doc)
  })
})

Router.post('/login', (req, res) => {
  const { user, pwd } = req.body
  User.findOne({user, pwd: md5Pwd(pwd)}, _filter, (err, doc) => {
    if(!doc) {
      return res.json({ code: 1, msg: '用户名不存在或密码错误'})
    }
    res.cookie('userid', doc._id)
    return res.json({ code: 0, data: doc })
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
  const { userid }  =  req.cookies

  if(!userid) {
    return res.json({code: 1})
  }

  User.findOne({_id: userid}, _filter, (err, doc) => {
    if(err) {
      return res.json({code: 1, msg: '后台出错'})
    }
    if(doc) {
      return res.json({code: 0, data: doc})
    }
  })
})

function md5Pwd(pwd) {
  const salt = 'zhangsanlisi@wangermazi'
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router