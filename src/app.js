const express = require("express");
const usersData = require("../users.json")

const app = express();

app.get("/hello", (req, res) => {
  res.json({
    msg: "Hello From Server",
  });
});

app.get("/users",(req,res)=>{
    res.json(usersData)
})
app.post("/users/:id",(req,res)=>{
    console.log(req.params)
    res.json(usersData)
})

app.listen(3000, () => {
  console.log("Server started on Port 3000");
});
