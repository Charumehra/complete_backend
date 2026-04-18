const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.create({
    username,
    email,
    password,
  });
  const jwt = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET_KEY,
  );

  res.status(201).json({
    message: "User registered successfully",
    user,
    token,
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({
    message: "Login successful",
    user,
    token,
  });
}

module.exports = {
  registerUser,
  loginUser
};
