const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    emailId:{
        type:String,
        unique:true,
    },
    password:String,
    age:Number
})

const User = mongoose.model("User",userSchema)

module.exports = User;