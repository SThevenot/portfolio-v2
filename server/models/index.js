/** @format */

const dbConnection = require("../config/connection");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db ={};
db.mongoose = mongoose;
db.url = dbConnection.url;
db.projects = require("./Project")(mongoose);

module.exports = db;