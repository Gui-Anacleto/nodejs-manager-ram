const http = require('http');
const os = require('os');
const host = 'http://localhost';
const port = 3000;

http.createServer((req, res) => {
    res.end('<h1>TESTE</h1>')
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));

