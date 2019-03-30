const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./config')
const User = model.getModel('user')
const _filter = { 'pwd': 0, '__v': 0}

Router.get('/list', (req, res) => {
  const { type } = req.query
  // User.remove({}, (e, d) => {})
  User.find({ type }, (err, doc) => {
    return res.json({code: 0, data: doc})
  })
})

Router.post('/update', (req, res) => {
  const userid = req.cookies.userid
  if(!userid) {
    return json.dumps({ code: 1 })
  }
  const body = req.body
  User.findByIdAndUpdate(userid, body, (err, doc) => {
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body)
    return res.json({ code: 0, data })
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
    const userModel = new User({user, type, pwd: md5Pwd(pwd)})
    userModel.save((e, d) => {
      if(e) {
        return res.json({code: 1, msg: '后台出错了'})
      }
      const { user, type, _id } = d
      res.cookie('userid', _id)
      return res.json({ code: 0, data: {user, type, _id}})
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