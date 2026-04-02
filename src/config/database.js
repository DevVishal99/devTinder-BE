const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const DB_URL = process.env.DB_URL || "";
  await mongoose.connect(DB_URL);
};

module.exports = connectDB;
