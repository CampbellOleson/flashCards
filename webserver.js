const express = require("express");
const bodyParser = require("body-parser");
const cards = require("./cards");
const server = express();

if (process.env.NODE_ENV === "production") {
  server.use(express.static("frontend/build"));
  server.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/cards", (req, res) => {
  res.send(cards.cards);
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Listening on port ${port}`));
