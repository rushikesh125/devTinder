const mongoose = require("mongoose");

const connectDB = async ()=>{
  await mongoose
  .connect(`mongodb+srv://${process.env.DB_URL}/devTinder`)
  
}
module.exports = connectDB;