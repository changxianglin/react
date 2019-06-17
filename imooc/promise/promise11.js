function queue(things) {
  let promise = Promise.resolve()
  things.forEach( thing => {
    promise = promise.then(() => {
      return new Promise( resolve => {
        doThing(thing, () => {
          resolve()
        })
      })
    })
  })
  return Promise
}

queue(['lots', 'of', 'things'])

var url = ['url1', 'url2', 'url3']

var requestAjax = function(arr) {
  if(arr.length) { 
  // $.ajax(
  //   {url: arr.pop(),
  //     success:function(result){
  //           var that = this
  //             requestAjax(this.arr.pop())
  //               $("#div1").html(result);
  //             }
  //   }
  // );
  setTimeout(function() {
    console.log(arr.pop())
  }, 1000)
  }
}