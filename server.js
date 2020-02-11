const express = require("express");

const apiRouter = require("./api/apiRouter");

const server = express();

server.use(express.json());

server.use("/api", apiRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API running!" });
});

//Route 404 fallback
server.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

module.exports = server;
