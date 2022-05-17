const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (request, response) { //request manda el cliente, response mando al cliente
    response.writeHead(200);
    response.end("My first server!");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});