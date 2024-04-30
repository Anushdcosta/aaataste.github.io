const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogroutes = require("./routes/blogroutes");

const app = express();

const dburi =
  "mongodb+srv://anush:Thephoenix1230984576@cluster0.pqnqxux.mongodb.net/nodetuts?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dburi)
  .then((results) => app.listen(3000))
  .catch((err) => console.log(err));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("<h1> Home page </h1>");
  res.redirect("/blogs");
});

app.use("/blogs", blogroutes);

app.get("/videos", (req, res) => {
  res.render("videos", { title: "videos" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});
