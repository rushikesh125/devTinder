const express = require("express");
const usersData = require("../users.json");
const connectDB = require("./db/connection");
const app = express();
const User = require("./models/user")
require('dotenv').config();

app.use(express.json())
app.post("/signup",async (req,res)=>{
  try {
    const user = new User(req.body)
  // await User.save(userObj)
  const result = await user.save();
  res.status(201).send({result})
  } catch (error) {
    res.status(400).send({msg:"email already exits",error:error})
  }
})

app.get("/",(req,res)=>{
  res.send({msg:"Hello "})
})

connectDB()
  .then((res) => {
    console.log("DB connected successfully");
    app.listen(3000, () => {
      console.log("Server started on Port 3000");
    });
  })
  .catch((err) => console.log(err));


// const obj  = {
//   name:"rushikesh",
//   age:400,
//   phoneno:4578521,
//   email:"rushi@gmail.com",
//   greet:function (){
//     console.log("greet")
//   }
// }
// const jobj = JSON.stringify(obj)
// console.log(jobj)
// const newObj = JSON.parse(jobj)
// console.log(newObj)
