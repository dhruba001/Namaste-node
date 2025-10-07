const http = require("node:http"); // core node mudule

const server = http.createServer(function (req, res) {
  if (req.url === "/getsecretdata") {
    res.end("There is no secret data");
    return; // else node js will try to run the next res.end and will show error
  }
  res.end("Hello world"); // response at the end, the end data that will be send to client or end user
});

server.listen(7777);
