const router = require("express").Router();

const postsRouter = require("./posts/postRouter");

router.use("/posts", postsRouter);

module.exports = router;
