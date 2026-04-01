const express = require("express");
const {
  amdinAuthMiddleware,
  userAuthMiddleware,
} = require("./middlewares/auth");

const app = express();

app.use("/admin", amdinAuthMiddleware);

app.get("/user", userAuthMiddleware, (req, res) => {
  res.send("Sent User Data");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("Sent All Data");
});

app.delete("/admin/deleteData", (req, res) => {
  res.send("Deleted All Data");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000..");
});
