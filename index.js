const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    
    res.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
        
    })
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h2> Homepage </h2>');
    console.log(req.url)
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Your server is running on port ${port}`);
})

