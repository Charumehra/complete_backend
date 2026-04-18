const monngoose=require('mongoose')

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const UserModel = monngoose.model("user",userSchema)

module.exports = UserModel;