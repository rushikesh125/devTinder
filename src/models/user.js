const mongoose = require('mongoose')
const validator = require("validator")
const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:50
    },
    lastName:String,
    emailId:{
        type:String,
        lowercase:true,
        trim:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email ")
            }
        }
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        trim:true,
    },   
    age:Number,
    skills:{
        type:[String]
    }
})

const User = mongoose.model("User",userSchema)

module.exports = User;