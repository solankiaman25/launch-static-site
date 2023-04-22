//create a node server

const http = require("http");

const server = http.createServer((request, response) => {
  setTimeout(() => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World");
  }, 10000);
});

server.listen({ port: 3000, host: "localhost" }, () => {
  console.log("Up and Running!");
});
