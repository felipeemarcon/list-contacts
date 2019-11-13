require("dotenv").config();

const express = require("express");
const path = require("path");
const { connectDb } = require("./config/database");

class AppController {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    connectDb();
  }

  middlewares() {
    this.express.use(express.json());

    this.express.use(
      "/files",
      express.static(path.resolve(__dirname, "../", "tmp"))
    );

    this.express.use(
      express.urlencoded({
        extended: true
      })
    );
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express;
