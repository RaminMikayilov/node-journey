# Node Journey

## Basics

### [`global.js`](./basics/global.js)

This file demonstrates the usage of Node.js global objects and variables.

- `global`: The global object that provides variables and functions available anywhere.
- `__dirname`: The path to the current directory.
- `__filename`: The path to the current file.

Example usage:

```javascript
// global object is a global object that provides variables and functions that are available anywhere.
console.log(global);

// __dirname - path to current directory
console.log(__dirname);

// __filename - path to the current file
console.log(__filename);
```

### [`modules.js`](./basics/modules.js)

This file demonstrates the usage of Node.js modules.

- `require()`: A function to include modules.
- `module.exports`: An object that is returned by the `require()` function.

Example usage:

```javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
```

```javascript
const math = require("./modules");

const sum = math.add(5, 3);
const difference = math.subtract(5, 3);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
```

### [`files.js`](./basics/file-system/files.js)

This file demonstrates the usage of Node.js file system module.

- `fs.readFile()`: A function to read files asynchronously.
- `fs.writeFile()`: A function to write files asynchronously.
- `fs.unlink()`: A function to delete files asynchronously.

Example usage:

```javascript
const fs = require("fs");

// Read file
fs.readFile("example.txt", (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log(data);
});

// Write file
fs.writeFile("example.txt", "Hello, World!", (err) => {
  if (err) {
    console.error(err);
  }

  console.log("File written successfully!");
});

// Delete file
fs.unlink("example.txt", (err) => {
  if (err) {
    console.error(err);
  }

  console.log("File deleted successfully!");
});
```

### [`streams.js`](./basics/streams/streams.js)

This file demonstrates the usage of Node.js streams. Streams are objects that let you read data from a source or write data to a destination in continuous fashion.

- `fs.createReadStream()`: A function to create a readable stream.
- `fs.createWriteStream()`: A function to create a writable stream.

Example usage:

```javascript
const fs = require("fs");

const read = fs.createReadStream("example.txt", "utf8");
const write = fs.createWriteStream("output.txt");

read.on("data", (chunk) => {
  write.write(chunk);
});
```

### [`server.js`](./http/server.js)

This file demonstrates the usage of Node.js HTTP module to create a simple server.

- `http.createServer()`: A function to create an HTTP server.
- `server.listen()`: A function to start the server.

Example usage:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

### [Express basic](./express/app.js)

This file demonstrates the usage of Express.js to create a simple server. Express.js is a web application framework for Node.js.

- `express()`: A function to create an Express application.
- `app.get()`: A function to handle GET requests.
- `app.listen()`: A function to start the server.

Example usage:

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // do not need to set the content type, end the response and set the status code
  res.send("Hello, World!");
});

app.listen(3001);
```
