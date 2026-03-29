const express = require("express");

const app = express();

app.use("/",(req, res) => {
    res.send("<h1> Hello from the dashboard side! </h1>");
  });

app.use("/test",(req, res) => {
  res.send("<h1> Hello from the server test side! </h1>");
});

app.use("/hello",(req, res) => {
    res.send("<h1> Hello from the server hello side! </h1>");
  });


app.listen(3000, () => {
  console.log("Server is running on port 3000..");
});
