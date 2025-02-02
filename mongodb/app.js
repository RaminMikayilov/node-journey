require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbURI = process.env.ATLAS_URI;
const Blog = require("./models/blog");

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.get("/create-blog", (req, res) => {
  const blog = new Blog({
    title: "My Second Blog",
    content: "Hello, this is my second blog post.",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
