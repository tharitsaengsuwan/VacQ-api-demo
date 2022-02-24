const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const hospitals = require("./routes/hospitals");
const auth = require("./routes/auth")
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json())
app.use(cookieParser());

app.use("/api/v1/hospitals", hospitals);
app.use("/api/v1/auth", auth)

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log("server running in ", process.env.NODE_ENV)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
