const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const connctDB = require("./config/db");
const mailConfig = require("./config/mail");
const transporter = mailConfig();
const Mail = require("./model/Mail");

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

app.use("/sendMail", async (req, res) => {
  try {
    const mail = new Mail({
      from: process.env.SENDER_MAIL,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text
    });

    var mailOptions = {
      from: process.env.SENDER_MAIL, // sender address (who sends)
      to: req.body.to, // list of receivers (who receives)
      subject: req.body.subject, // Subject line
      text: req.body.text // plaintext body
    };
    const result = await transporter.sendMail(mailOptions);
    await mail.save();
    res.status(200).send({ success: true, code: 200, result });
  } catch (error) {
    console.log(error);
  }
});

process.on("uncaughtException", (err, promise) => {
  console.log(`error: ${err.message}`);
  process.exit(1);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(`error: ${err.message}`);
  process.exit(1);
});
