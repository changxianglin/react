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


// function log(target) {
//   const desc = Object.getOwnPropertyDescriptors(target.prototype)
//
//   for(const key of Object.keys(desc)) {
//     if(key === 'constructor') {
//       continue
//     }
//
//      const func = desc[key].value
//
//      if('function' === typeof func) {
//        Object.defineProperty(target.prototype, key, {
//          value(...args) {
//            console.log('before ' + key)
//            const ret = func.apply(this, args)
//            console.log('after ' + key)
//
//            return ret
//          }
//        })
//      }
//   }
// }
//
// function readonly(target, key, descriptor) {
//     descriptor.writable = false
// }
//
// function validate(target, key, descriptor) {
//     const func = descriptor.value
//     descriptor.value = function (...args) {
//         for (let num of args) {
//             if('number' !== typeof num) {
//                 throw new Error(`${num} is not a number`)
//             }
//         }
//
//         return func.apply(this, args)
//     }
// }
//
//
// @log
// class Numberic {
//    @readonly PI = 3.1415926
//
//    @validate
//    add(...nums) {
//      return nums.reduce((p, n) => (p + n), 0)
//    }
//  }
//
// // new Numberic().add(1, 2)
// new Numberic().add(1, 'x')



// use mobx

import {observable, computed, autorun, when, reaction, action, runInAction} from 'mobx'

// const arr = observable(['a', 'b', 'c'])
//
// console.log(arr[0], arr[1])

// var num = observable.box(20)
// var str = observable.box('hello')
// var bool = observable.box(true)
//
// num.set(50)
// str.set('world')
// bool.set(false)
//
// console.log(num.get(), str.get(), bool.get())

class Store {
    @observable array = []
    @observable obj = {}
    @observable map = new Map()

    @observable string = 'hello'
    @observable number = 20
    @observable bool = false

    @computed get mixed() {
        return store.string + '/' + store.number
    }

    @action.bound bar() {
        // this.string = 'world'
        // this.number = 30
    }
}


// computed

var store = new Store()

// var foo = computed(function () {
//     return store.string + '/' + store.number
// })
//
// foo.observe(function (change) {
//     console.log(change)
// })
//
// store.string = 'world'
// store.number = 30

// console.log(foo.get())

//autorun

// autorun(() => {
//     // console.log(store.string + '/' + store.number)
//     console.log(store.mixed)
// })
//
// store.string = 'world'
// store.number = 30

// when
//
// when(() => store.bool, () => console.log("it's true"))
//
// store.bool = true

//reaction
reaction(() => [store.string, store.number], arr => console.log(arr.join('/')))

// store.string = 'world'
// store.number = 30

// store.bar()

// var bar = store.bar
//
// bar()

runInAction('modify', () => {
    store.string = 'world'
    store.number = 30
})