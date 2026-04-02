const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Vishal",
    lastName: "Balekundri",
    email: "vishal@google.com",
  });

  try {
    await user.save();
    res.send("User created successfully..");
  } catch (err) {
    console.log("Error creating user: ", err);
    res.status(500).send("Error creating user..");
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully..");
    app.listen(3000, () => {
      console.log("Server is running on port 3000..");
    });
  })
  .catch((err) => {
    console.log("Error connecting to database: ", err);
  });
