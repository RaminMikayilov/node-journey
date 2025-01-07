const express = require("express");
const app = express();

app.listen(3001);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});
