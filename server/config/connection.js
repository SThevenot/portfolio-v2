/** @format */

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolio-v2",
  {
    useNewUrlParser: true,
  }, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("succesfully connected!");
    }
  }
);

module.exports = mongoose.connection;
