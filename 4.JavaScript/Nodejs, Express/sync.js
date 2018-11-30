var fs = require('fs');

// Sync
var data = fs.readFileSync('README.md', { encoding: 'utf8' });
console.log(data);
console.log(1);

// Async
fs.readFile('README.md', {encoding: 'utf8'}, function(err, data){
    console.log(data);
})
console.log(2);