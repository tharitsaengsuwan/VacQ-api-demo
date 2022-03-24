const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "vaccenter",
});

module.exports = connection