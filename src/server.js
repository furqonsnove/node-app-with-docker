const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to my my node app and it just for learning docker");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
