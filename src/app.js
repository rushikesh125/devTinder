const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Hello From Server",
  });
});

app.listen(3000, () => {
  console.log("Server started on Port 3000");
});
