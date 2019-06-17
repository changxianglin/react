console.log('here we go')

new Promise((resolve, reject) => {
  setTimeout(() => {
    // throw Error('bye')
    reject('bye')
  }, 2000)
})
  .then(value => {
    console.log(value + ' world')
  })
  .catch(error => {
    // console.log('Error: ', error.message)
    console.log('Error: ', value)
  })