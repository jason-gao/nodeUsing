'use strict';

var s = 'Hello';

function greet(name){
    console.log(s + ', '+name+'!')
}

function hello(){
    console.log('Hello, World!');
}


// module.exports = greet;

module.exports = {
    hello: hello,
    greet: greet
};

// exports.hello = hello;
// exports.greet = greet;