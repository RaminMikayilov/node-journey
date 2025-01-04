const fs = require("fs");

// reading files
fs.readFile("./docs/doc1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// writing files
// if file does not exist, it will be created
fs.writeFile("./docs/doc2.txt", "Hello, World!", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file was written");
});

// deleting files
if (fs.existsSync("./docs/doc3.txt")) {
  fs.unlink("./docs/doc3.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
} else {
  console.log("file does not exist");
}

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// reading directories
fs.readdir("./docs", (err, files) => {
  if (err) {
    console.log(err);
  }
  console.log(files);
});
