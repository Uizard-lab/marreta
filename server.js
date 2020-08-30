require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Use json
app.use(bodyParser.json());
app.use(cors());

//Import routes
const projectsRouter = require("./routes/projects");
const usersRouter = require("./routes/users");

//Routes Middleware
app.use("/projects", projectsRouter);
app.use("/users", usersRouter);

mongoose
  .connect(process.env.DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to DB!"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(5000, () => console.log("Listenning on port 5000..."));
