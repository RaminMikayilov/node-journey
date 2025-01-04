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
