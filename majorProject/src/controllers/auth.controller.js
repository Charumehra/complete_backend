const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  try {
    const { username, email, password, role = "user" } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hash,
      role,
    });

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);

    return res.status(201).json({
      message: "user created successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

async function loginUser(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or:[
        {username},
        {email}
    ]

  })
  
    if (!user){
        return res.status(401).json({message:"Invalid credentials"})
    }

    const isPasswordValid = await bcrypt.comapre(password, user.password)

    if(!isPasswordValid){
       return res.status(401).json({message:"Invalid credentials"})
    }

    const token = jwt.sign({
        id:user._id,
        role:user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    return res.status(200).json({
        message:"Login successful",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
    })          
        
}

module.exports = {
  registerUser,
  loginUser
}
