/** @format */

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio-v2",
  {
    useNewUrlParser: true,
  },
  function (err) {
    if (err) {
      throw err;
    } else {
      console.log("succesfully connected!");
    }
  }
);

module.exports = mongoose.connection;
