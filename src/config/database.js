const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Vishal:Vishal%40%231999@cluster0.j8e6now.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
