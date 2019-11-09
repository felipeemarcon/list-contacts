const express = require("express");
const mongoose = require("mongoose");

const app = express();
const server = require("http").Server(app);

app.use(express.json());
app.use(require("./routes"));

mongoose.connect("mongodb://localhost:27017/contacts", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.listen(3000, () => {
  console.log("Server is up!");
});
