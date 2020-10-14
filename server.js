// http://localhost:3000/

const http = require("http");
const path = require("path");
const fs = require("fs");

// creates a server
const server = http.createServer((req, res) => {
  // that reads the request
  //              \/
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
  // and reads this one too
  //               \/
  if (req.url === "/test") {
    fs.readFile(path.join(__dirname, "test.html"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

// listens to \/ port and logs if the site is running
server.listen(process.env.PORT || 3000, () => console.log("LocalSite Running"));
