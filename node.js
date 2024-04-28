var http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    res.end('<h1>Hello World</h1>');
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server Running At ${PORT}`);
});