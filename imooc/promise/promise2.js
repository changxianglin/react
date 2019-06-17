console.log('here we go')

new Promise(resolve => {
  console.log('TEST')
  setTimeout(() => {
    resolve('hello')
  }, 2000)
})
  .then(value => {
    console.log(value + ' world')
  })