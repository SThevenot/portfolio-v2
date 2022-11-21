/** @format */

const express = require("express");
const path = require("path");
let mongoose = require("mongoose");
const projectRoute = require("./routes/project-routes");
// const { ApolloServer } = require("apollo-server-express");
// const { typeDefs } = require("./schemas");

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

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/projects", projectRoute)
const server = app.listen(PORT, () => {
  console.log("connected to port" + PORT)
})









// const server = new ApolloServer({
//   typeDefs,
// });

// const startApolloServer = async (typeDefs) => {
//   await server.start();
//   server.applyMiddleware({ app });

  // db.once("open", () => {
  //   app.listen(PORT, () => {
  //     console.log(`🌍 Server running on port ${PORT}`);
  //     console.log(`GraphQL at: http://localhost:${PORT}${server.graphqlPath}`);
  //   });
  // });
// };

// startApolloServer(typeDefs);
