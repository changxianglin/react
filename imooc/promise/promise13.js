function resovlveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 2000)
  })
}

async function f1() {
  var x = await resovlveAfter2Seconds(10)
  console.log(x)
}

f1()