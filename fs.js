'use strict';

var fs = require('fs')

fs.readFile('sample.txt','utf-8', function (err, data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

console.log('async read file');


var data = 'Hello , node js\ntest';

fs.writeFile('output.txt',data, function (err) {
    if (err){
        console.log(err)
    }else{
        console.log('OK')
    }
});


console.log('async write file')
