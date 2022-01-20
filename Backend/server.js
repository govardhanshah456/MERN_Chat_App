const express = require("express");
const dotenv = require("dotenv");
const chats = require("./dummyData");
const { connect } = require("mongoose");
const ConnectDB = require("./config/db");
const app = express();
dotenv.config();
ConnectDB();
const Port = process.env.PORT ? process.env.PORT : 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.listen(Port, console.log(`Listening on ${Port}`));
