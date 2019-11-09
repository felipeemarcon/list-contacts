const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App that list my contacts :)");
});

app.listen(3000, () => {
  console.log("Server is up!");
});
