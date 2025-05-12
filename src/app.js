const express = require("express");
const usersData = require("../users.json");
const connectDB = require("./db/connection");
const app = express();
const User = require("./models/user");
const { validateSignupData } = require("./utils/validators");
const bcrypt = require("bcrypt");
require("dotenv").config();

app.use(express.json());
app.post("/signup", async (req, res) => {
  try {
    validateSignupData(req);
    const { firstName, lastName, emailId, password, age, skills } = req.body;
    const hashPass = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: hashPass,
      age,
      skills,
    });

    const result = await User.insertOne(user);
    res.status(201).send({ result });
  } catch (error) {
    res.status(400).send({
      msg: "Failed to Sign Up",
      errormsg: error?.message,
      err: error,
      data: req.body,
    });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid Credientials");
    }
    const { password: hashPassword } = user;
    const isPass = await bcrypt.compare(password, hashPassword);
    if (!isPass) {
      throw new Error("Invalid Credientials")
    }else{
      res.send("Login Success");
    }
  } catch (error) {
    res.status(400).json({ msg: error?.message, error: error });
  }
});
app.get("/", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (error) {
    res.send(error);
  }
});

connectDB()
  .then((res) => {
    console.log("DB connected successfully");
    app.listen(3000, () => {
      console.log("Server started on Port 3000");
    });
  })
  .catch((err) => console.log(err));
