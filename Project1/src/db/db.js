const mongoose = require("mongoose")



async function connectDB(){

    await  mongoose.connect("mongodb+srv://charu:hhQix9Op9P4ydPwd@complete-backend.yqtr5i2.mongodb.net/Project1")

    console.log("connected to DB")
}

module.exports = connectDB;