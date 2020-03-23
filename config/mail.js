const nodemailer = require("nodemailer");

const mailConfig = () => {
  return nodemailer.createTransport({
    host: process.env.MAIL_HOST, // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: process.env.MAIL_PORT, // port for secure SMTP
    tls: {
      ciphers: "SSLv3"
    },
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.SENDER_MAIL_PASSWORD
    }
  });
};

module.exports = mailConfig;
