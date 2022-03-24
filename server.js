const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const hospitals = require("./routes/hospitals");
const auth = require("./routes/auth");
const appointments = require("./routes/appointments");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json())
app.use(cookieParser());

app.use("/api/v1/hospitals", hospitals);
app.use("/api/v1/auth", auth)
app.use("/api/v1/appointments", appointments)

const PORT = process.env.PORT || 5000;
console.log(process.env.PORT)

const server = app.listen(
  PORT,
  console.log("server running in ", process.env.NODE_ENV)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
