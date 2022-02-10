const express = require("express");
const dotenv = require("dotenv");
const hospitals = require("./routes/hospitals");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json())

app.use("/api/v1/hospitals", hospitals);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log("server running in ", process.env.NODE_ENV)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
