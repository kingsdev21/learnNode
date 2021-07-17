const http = require('http');

const port = 5000;
//Create Server
http.createServer((req, res) => {
    res.write('Hello world I am node js.....');
    res.end();
}).listen(port, ()=> console.log(`Our Node server is running on ${port}`));