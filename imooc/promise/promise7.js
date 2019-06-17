// 1
doSomething().then(function() {
  return doSomethingEles()
})

// 2
doSomething().then(function() {
  doSomethingEles()
})

// 3
doSomething().then(doSomethingEles())

// 4
doSomething().then(doSomethingEles)