const express = require("express");
const Blog = require("../models/bloger");

const router = express.Router();

router.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Blogs", blogs: result, webpage: 0 });
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/chicken", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("index", { title: "Blogs", blogs: result, webpage: 1 });
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/seafood", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("index", { title: "Blogs", blogs: result, webpage: 2 });
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/Mutton", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("index", { title: "Blogs", blogs: result, webpage: 3 });
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/vegetable", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("index", { title: "Blogs", blogs: result, webpage: 4 });
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/sweets", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("index", { title: "Blogs", blogs: result, webpage: 5 });
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/drinks", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("index", { title: "Blogs", blogs: result, webpage: 6 });
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/other", (req, res) => {
  Blog.find()

    .then((result) => {
      res.render("index", { title: "Blogs", blogs: result, webpage: 6 });
    })
    .catch((err) => {
      console.log("err");
    });
});
router.get("/all_videos", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("allview", { title: "Blogs", blogs: result, webpage: 0 });
    })
    .catch((err) => {
      console.log("err");
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.find().then((mainresult) => {
    Blog.findById(id)
      .then((result) => {
        res.render("details", {
          blogs: mainresult,
          blog: result,
          title: "blog details",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
