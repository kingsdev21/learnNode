//File systems in Node

const fs = require('fs');
const path = require('path');

//TO create directory with node. This can be done asynchronously by default or synchronous

fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    // if(err) throw err;
    if(err);
    console.log('Folder created...');
});

//To create File Note: This method over writes whatever text that is inside the file. It does not create new file if the file already exists
//If you want to add text to already existing file, you will use appendFile

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World. This is node js', err => {
    if(err) throw err;
    console.log('File written to...');
});

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Hello World. Node js just added to the content of this file', err => {
    if(err) throw err;
    console.log('File is added to...');
});

//Since the writeFile has a callback method we can fuse the appendFile into the call back and the above two functions will look like below

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World. This is node js', err => {
    if(err) throw err;
    console.log('File written to...');

    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Hello World. Node js just added to the content of this file', err => {
        if(err) throw err;
        console.log('File is added to...');
    });
});


//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, fileData) => {
    if(err) throw err;
    console.log(fileData);
});


//Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloNode.txt'), (err) => {
    if(err) throw err;
    console.log('file renamed...');
});




