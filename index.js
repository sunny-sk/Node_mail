const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

app.listen(3000, () => {
  console.log("server started at 3000");
});

process.on("uncaughtException", (err, promise) => {
  console.log(`error: ${err.message}`);
});
