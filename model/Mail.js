const mongoose = require("mongoose");

const mailSchema = new mongoose.Schema({
  from: {
    type: String,
    default: process.env.SENDER_MAIL
  },
  to: {
    type: String,
    required: [true, "Please add a target mail Id"]
  },
  subject: {
    type: String,
    required: [true, "Please add a subject of mail"]
  },
  text: {
    type: String,
    required: [true, "Please add message"]
  },
  sendDate: {
    type: Date,
    default: Date.now
  }
});

const Mail = mongoose.model("Mail", mailSchema);
module.exports = Mail;
