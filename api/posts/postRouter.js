const router = require("express").Router();

const postDB = require("./postModel");

router.get("/", (req, res) => {
  postDB
    .get()
    .then((posts) => {
      if (posts) {
        res.status(200).json(posts);
      } else {
        res.status(404).json({ message: "No posts found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Could not get posts from database" });
    });
});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
