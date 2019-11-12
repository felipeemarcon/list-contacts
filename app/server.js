require("dotenv").config();

const app = require("./app");

// SERVER AND DB
const server = require("http").Server(app);
const { connectDb } = require("./config/database");

connectDb()
  .then(async () => {
    server.listen(process.env.APP_PORT || 3000, () => {
      console.log(
        `Server is up on ${process.env.APP_HOST}:${process.env.APP_PORT}!`
      );
    });
  })
  .catch(err => {
    console.log(err);
  });
