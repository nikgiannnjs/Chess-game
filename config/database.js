const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const user = process.env.MY_SQL_USER;
const password = process.env.MY_SQL_PASSWORD;
const host = process.env.MY_SQL_HOST;
const database = process.env.MY_SQL_DATABASE;
const port = process.env.MY_SQL_PORT;

const sqlDB = mysql.createConnection({
  user,
  host,
  password,
  database,
  port,
});

module.exports = sqlDB;
