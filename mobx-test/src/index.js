// function Animal() {}
// function Dog() {}
//
// Object.defineProperties(Animal.prototype, {
//   name: {
//     value() {
//       return 'Animal'
//     }
//   },
//   say: {
//     value() {
//       return `I'm ${this.name()}`
//     }
//   }
// })
//
// Dog.prototype = Object.create(Animal.prototype, {
//   constructor: {
//     value: Dog,
//     enumerable: false
//   }
//   name: {
//     value() {
//       return 'Dog'
//     }
//   }
// })
//
// document.write(new Dog().say())



// class Animal {
//   name() {
//     return 'Animal'
//   }
//   say() {
//     return `I'm ${this.name()}`
//   }
// }
//
// class Dog extends Animal {
//   food = 'bone'
//
//   name() {
//     return 'Dog'
//   }
// }
//
// console.log(new Dog() instanceof Animal)


function log(target) {
  const desc = Object.getOwnPropertyDescriptors(target.prototype)

  for(const key of Object.keys(desc)) {
    if(key === 'constructor') {
      continue
    }

     const func = desc[key].value

     if('function' === typeof func) {
       Object.defineProperty(target.prototype, key, {
         value(...args) {
           console.log('before ' + key)
           const ret = func.apply(this, args)
           console.log('after ' + key)

           return ret
         }
       })
     }
  }
}

function readonly(target, key, descriptor) {
    descriptor.writable = false
}

function validate(target, key, descriptor) {
    const func = descriptor.value
    descriptor.value = function (...args) {
        for (let num of args) {
            if('number' !== typeof num) {
                throw new Error(`${num} is not a number`)
            }
        }

        return func.apply(this, args)
    }
}


@log
class Numberic {
   @readonly PI = 3.1415926

   @validate
   add(...nums) {
     return nums.reduce((p, n) => (p + n), 0)
   }
 }

// new Numberic().add(1, 2)
new Numberic().add(1, 'x')