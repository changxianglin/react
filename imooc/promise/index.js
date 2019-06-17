document.getElementById('start').addEventListener('click', start, false)

function start() {

}

$('#start').on('click', start)

$.ajax('http://baidu.com', {
  success: function(res) {
    // todo callback
  }
})

$(function() {
  // callback
})


// 异步操作没办法 try cacth 到错误
// 有可能闭包使用 变量

// 1.嵌套层次很深, 难以维护
// 2.无法正常的使用 return 和 throw
// 3.无法正常的检测堆栈信息
// 4.多个回调之间难以建立联系