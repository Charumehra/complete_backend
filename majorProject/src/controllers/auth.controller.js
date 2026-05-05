const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') 


async function registerUser (req, res){
    try {
        const {username, email, password, role='user'} = req.body

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const existingUser = await userModel.findOne({
            $or:[
               {username},
               {email}
            ]
        })

        if(existingUser){
           return res.status(409).json({message:'User already exists'})
        }

        const hash = await bcrypt.hash(password,10)

        const user = await userModel.create({
            username,
            email,
            password: hash,
            role
        })

        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET)

        res.cookie('token',token)

        return res.status(201).json({message:'user created successfully',
            user:{
                id:user._id,
                username:user.username, 
                email:user.email,
                role:user.role,
            }
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Server error' })
    }
}

module.exports={
    registerUser
}