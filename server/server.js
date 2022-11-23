/** @format */

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

var corsOptions = {
  origin: "http://localhost:3001",
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require("./routes/project-routes")(app);

app.listen(PORT, () => {
  console.log(`API server for projects running on port ${PORT}!`);
});
