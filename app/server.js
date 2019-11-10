require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(require("./routes"));

// SERVER AND DB
const server = require("http").Server(app);
const { connectDb } = require("./config/database");

connectDb()
  .then(async () => {
    server.listen(process.env.APP_PORT, () => {
      console.log(
        `Server is up on ${process.env.APP_HOST}:${process.env.APP_PORT}!`
      );
    });
  })
  .catch(err => {
    console.log(err);
  });
