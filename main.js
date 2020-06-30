'use strict';

var greet = require('./hello');

var s = 'jasong';

greet.greet(s);


// module.exports = variable;
// var foo = require('other_module');
// var s = 'global';
//实现“模块”功能的奥妙就在于JavaScript是一种函数式编程语言，它支持闭包。如果我们把一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量


// var module = {
//     id: 'hello',
//     exports: {}
// };
//
// var load = function(module){
//     function greet(name) {
//         console.log('Hello, '+name+'!');
//     }
//     module.exports = greet;
//
//     return module.exports;
// }
//
// var exported = load(module);
// save(module, exported);


