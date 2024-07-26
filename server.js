const express = require("express");
const app = express();
const dotenv = require("dotenv");
const sqlDB = require("./config/database");
const redisClient = require("./config/redis");
const path = require("path");
const viewRoutes = require("./routes/views");
dotenv.config();

const port = process.env.PORT;

//MySQL connection
sqlDB.connect((err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log("Connection to MySQL database was successfull.");
  }
});

//EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", viewRoutes);

//Server connection
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
