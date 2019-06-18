const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const usersRouter = new Router({ prefix: '/users' })

app.use(bodyparser())
app.use(router.routes())
app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

let db = [{name: '李四'}]

router.get('/', (ctx) => {
  ctx.body = '主页'
})

usersRouter.get('/', (ctx) => {
  ctx.body = db
})

usersRouter.post('/', (ctx) => {
  db.push(ctx.request.body)
  ctx.body = ctx.request.body
})

usersRouter.get('/:id', (ctx) => {
  ctx.body = db[ctx.params.id * 1]
})

usersRouter.put('/:id', (ctx) => {
  db[ctx.params.id * 1] = ctx.request.body 
  ctx.body = ctx.request.body
})

usersRouter.delete('/:id', (ctx) => {
  db.splice(ctx.params.id * 1, 1)
  ctx.status = 204
})

app.listen(3000)