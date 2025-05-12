const validator = require("validator")
const validateSignupData = (req)=>{
    const {firstName,lastName,emailId,password} = req.body
    if(!firstName || !lastName){
        throw new Error("Name is not valid")
    }else if(firstName.length<4 || firstName.length>50){
        throw new Error("Firstname should be 4-50 chars")
    } else if(!validator.isEmail(emailId)){
        throw new Error("Invlid Email")
    }else if(!validator.isStrongPassword(password)){
        throw new Error("Password is Not Strong Enough")
    }

}  

module.exports={
    validateSignupData
}