const fs = require("fs");

const readStream = fs.createReadStream("./docs/doc.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/doc2.txt");

readStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK -----");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});

// Piping streams - copying data from one stream to another
const pipeWriteStream = fs.createWriteStream("./docs/doc3.txt");
readStream.pipe(pipeWriteStream);
