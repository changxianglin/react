var Ajax = require('simple-ajax')

var url = ['/bar', '/boo', '/foo']

var requestAjax = function(arr) {
  var ajax = new Ajax(arr.pop())
  ajax.on('success', () => {
    requestAjax(arr)
  })
}

requestAjax(url)