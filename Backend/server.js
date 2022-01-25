const express = require("express");
const dotenv = require("dotenv");
const chats = require("./dummyData");
const { connect } = require("mongoose");
const ConnectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const {
  notFound,
  errorHandler,
} = require("./middlewares/errorHandlingMiddleware");
const app = express();
app.use(express.json());
dotenv.config();
ConnectDB();
const Port = process.env.PORT ? process.env.PORT : 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.use("/api/user", userRoute);
app.use(notFound);
app.use(errorHandler);
app.listen(Port, console.log(`Listening on ${Port}`));
