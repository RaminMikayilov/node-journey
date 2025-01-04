const fs = require("fs");

const readStream = fs.createReadStream("./docs/doc.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/doc2.txt");

readStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK -----");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});
