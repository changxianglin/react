class HomeCtl {
  index(ctx) {
    ctx.body = '主页'
  }
}

module.exports = new HomeCtl()