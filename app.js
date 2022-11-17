const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// express app
const app = express();

// connect to mongo db
const db_url =
  "mongodb+srv://node:node1234@test.7ydnwmm.mongodb.net/node_auth?retryWrites=true&w=majority";
mongoose
  .connect(db_url)
  .then((result) => {
    console.log("connected db");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});
