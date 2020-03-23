const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_URL);
  console.log(
    `mongodb Connected at ${conn.connection.host} ${conn.connection.port}`
  );
};
module.exports = connectDB;
