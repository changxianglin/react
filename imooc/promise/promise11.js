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
function queue(things) {
  let promise = Promise.resolve()
  things.forEach( thing => {
    promise = Promise.then(() => {
      doThing(thing, () => {
        resolve()
      })
    })
  })
  return promise 
}

queue(['lots', 'of', 'things'])