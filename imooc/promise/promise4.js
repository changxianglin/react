console.log('here we go')

let promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('the promise fufilled')
    resolve('hello, world')
  }, 1000)
})

setTimeout(() => {
  promise.then(value => {
    console.log(value)
  })
}, 3000)