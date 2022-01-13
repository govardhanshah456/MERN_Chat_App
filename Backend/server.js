const express = require("express");
const dotenv = require("dotenv");
const app = express();
const Port = process.env.PORT ? process.env.PORT : 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(Port, console.log(`Listening on ${Port}`));
