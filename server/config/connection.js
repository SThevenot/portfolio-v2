/** @format */

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolio-v2",
  {
    useNewUrlParser: true,
  }
);

module.exports = mongoose.connection;
