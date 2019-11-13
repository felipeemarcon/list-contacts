require("dotenv").config();

const mongoose = require("mongoose");

const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

const connectDb = () => {
  return mongoose.connect(uri, mongoOptions);
};

module.exports = { connectDb };
