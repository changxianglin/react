/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

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
  var desc = Object.getOwnPropertyDescriptors(target.prototype);

  var _loop = function _loop(key) {
    if (key === 'constructor') {
      return 'continue';
    }

    var func = desc[key].value;

    if ('function' === typeof func) {
      Object.defineProperty(target.prototype, key, {
        value: function value() {
          console.log('before ' + key);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var ret = func.apply(this, args);
          console.log('after ' + key);

          return ret;
        }
      });
    }
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(desc)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var _ret = _loop(key);

      if (_ret === 'continue') continue;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function readonly(target, key, descriptor) {
  descriptor.writable = false;
}

function validate(target, key, descriptor) {
  var func = descriptor.value;
  descriptor.value = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var num = _step2.value;

        if ('number' !== typeof num) {
          throw new Error(num + ' is not a number');
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return func.apply(this, args);
  };
}

var Numberic = log(_class = (_class2 = function () {
  function Numberic() {
    _classCallCheck(this, Numberic);

    _initDefineProp(this, 'PI', _descriptor, this);
  }

  _createClass(Numberic, [{
    key: 'add',
    value: function add() {
      for (var _len3 = arguments.length, nums = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nums[_key3] = arguments[_key3];
      }

      return nums.reduce(function (p, n) {
        return p + n;
      }, 0);
    }
  }]);

  return Numberic;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'PI', [readonly], {
  enumerable: true,
  initializer: function initializer() {
    return 3.1415926;
  }
}), _applyDecoratedDescriptor(_class2.prototype, 'add', [validate], Object.getOwnPropertyDescriptor(_class2.prototype, 'add'), _class2.prototype)), _class2)) || _class;

// new Numberic().add(1, 2)


new Numberic().add(1, 'x');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImxvZyIsInRhcmdldCIsImRlc2MiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwicHJvdG90eXBlIiwia2V5IiwiZnVuYyIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25zb2xlIiwiYXJncyIsInJldCIsImFwcGx5Iiwia2V5cyIsInJlYWRvbmx5IiwiZGVzY3JpcHRvciIsIndyaXRhYmxlIiwidmFsaWRhdGUiLCJudW0iLCJFcnJvciIsIk51bWJlcmljIiwibnVtcyIsInJlZHVjZSIsInAiLCJuIiwiYWRkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZB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ZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBmdW5jdGlvbiBBbmltYWwoKSB7fVxuLy8gZnVuY3Rpb24gRG9nKCkge31cbi8vXG4vLyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhBbmltYWwucHJvdG90eXBlLCB7XG4vLyAgIG5hbWU6IHtcbi8vICAgICB2YWx1ZSgpIHtcbi8vICAgICAgIHJldHVybiAnQW5pbWFsJ1xuLy8gICAgIH1cbi8vICAgfSxcbi8vICAgc2F5OiB7XG4vLyAgICAgdmFsdWUoKSB7XG4vLyAgICAgICByZXR1cm4gYEknbSAke3RoaXMubmFtZSgpfWBcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0pXG4vL1xuLy8gRG9nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQW5pbWFsLnByb3RvdHlwZSwge1xuLy8gICBjb25zdHJ1Y3Rvcjoge1xuLy8gICAgIHZhbHVlOiBEb2csXG4vLyAgICAgZW51bWVyYWJsZTogZmFsc2Vcbi8vICAgfVxuLy8gICBuYW1lOiB7XG4vLyAgICAgdmFsdWUoKSB7XG4vLyAgICAgICByZXR1cm4gJ0RvZydcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0pXG4vL1xuLy8gZG9jdW1lbnQud3JpdGUobmV3IERvZygpLnNheSgpKVxuXG5cblxuLy8gY2xhc3MgQW5pbWFsIHtcbi8vICAgbmFtZSgpIHtcbi8vICAgICByZXR1cm4gJ0FuaW1hbCdcbi8vICAgfVxuLy8gICBzYXkoKSB7XG4vLyAgICAgcmV0dXJuIGBJJ20gJHt0aGlzLm5hbWUoKX1gXG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBjbGFzcyBEb2cgZXh0ZW5kcyBBbmltYWwge1xuLy8gICBmb29kID0gJ2JvbmUnXG4vL1xuLy8gICBuYW1lKCkge1xuLy8gICAgIHJldHVybiAnRG9nJ1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gY29uc29sZS5sb2cobmV3IERvZygpIGluc3RhbmNlb2YgQW5pbWFsKVxuXG5cbmZ1bmN0aW9uIGxvZyh0YXJnZXQpIHtcbiAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldC5wcm90b3R5cGUpXG5cbiAgZm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZXNjKSkge1xuICAgIGlmKGtleSA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAgY29uc3QgZnVuYyA9IGRlc2Nba2V5XS52YWx1ZVxuXG4gICAgIGlmKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmdW5jKSB7XG4gICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldC5wcm90b3R5cGUsIGtleSwge1xuICAgICAgICAgdmFsdWUoLi4uYXJncykge1xuICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlICcgKyBrZXkpXG4gICAgICAgICAgIGNvbnN0IHJldCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncylcbiAgICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyICcgKyBrZXkpXG5cbiAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICAgfVxuICAgICAgIH0pXG4gICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkb25seSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSBmYWxzZVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIGNvbnN0IGZ1bmMgPSBkZXNjcmlwdG9yLnZhbHVlXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGZvciAobGV0IG51bSBvZiBhcmdzKSB7XG4gICAgICAgICAgICBpZignbnVtYmVyJyAhPT0gdHlwZW9mIG51bSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtudW19IGlzIG5vdCBhIG51bWJlcmApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKVxuICAgIH1cbn1cblxuXG5AbG9nXG5jbGFzcyBOdW1iZXJpYyB7XG4gICBAcmVhZG9ubHkgUEkgPSAzLjE0MTU5MjZcblxuICAgQHZhbGlkYXRlXG4gICBhZGQoLi4ubnVtcykge1xuICAgICByZXR1cm4gbnVtcy5yZWR1Y2UoKHAsIG4pID0+IChwICsgbiksIDApXG4gICB9XG4gfVxuXG4vLyBuZXcgTnVtYmVyaWMoKS5hZGQoMSwgMilcbm5ldyBOdW1iZXJpYygpLmFkZCgxLCAneCcpIl0sInNvdXJjZVJvb3QiOiIifQ==