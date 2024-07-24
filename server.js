const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const sqlDB = require("./config/database");
const redisClient = require("./config/redis");

const port = process.env.PORT;

sqlDB.connect((err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log("Connection to MySQL database was successfull.");
  }
});

app.get("/", (req, res) => {
  res.send("Hello for server.");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
