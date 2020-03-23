const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const connctDB = require("./config/db");
const nodemailer = require("nodemailer");

dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

app.listen(3000, () => {
  console.log("server started at 3000");
  connctDB();
});

process.on("uncaughtException", (err, promise) => {
  console.log(`error: ${err.message}`);
  process.exit(1);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(`error: ${err.message}`);
  process.exit(1);
});
