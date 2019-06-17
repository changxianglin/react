new Promise(
  // 执行器
  function(resolve, reject) {
    // 一段耗时很长的异步操作

    resolve() // 数据处理完成

    reject() // 数据处理出错
  }
)
  .then(function A() {
    // 成功，下一步
  }, function B() {
    //  失败，做相应处理
  })


// Promise 是一个代理对象，它和原先进行的操作并无关系
// 它通过引入一个回调，避免更多的回调
// pending 待定 
// fulfilled 实现
// rejected 失败
