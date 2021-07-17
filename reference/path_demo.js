const path = require('path');

//basename of a file
console.log(path.basename(__filename));

//get file full path name
console.log(__filename);

//get directory of the file
console.log(path.dirname(__filename));

//get file extension
console.log(path.extname(__filename));

//get file object
console.log(path.parse(__filename));

//you can access any part of the object created e.g to get the root and name
console.log(path.parse(__filename).root);
console.log(path.parse(__filename).name);

//You can also join paths in using paths.join() methods
console.log(path.join(__dirname, 'test', 'accessment', 'exam.html'));
