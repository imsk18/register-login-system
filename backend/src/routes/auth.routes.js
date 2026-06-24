const express = require('express');
const userModel = require('../models/user.model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const authRouter = express.Router();

// Register route   
authRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const hash = crypto.createHash("md5").update(password).digest("hex");



    const user = await userModel.create({ name, email, password: hash });

    const token = jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET, { expiresIn: '1h' }
)
    res.status(201).json({ message: 'User registered successfully', user, token });
});

// Login route
authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body; 
    const user = await userModel.findOne({ email });
    if(!user){ 
        return res.status(400).json({ message: 'user not found' });
    }

    const isPasswordCorrect = user.password === crypto.createHash("md5").update(password).digest("hex");
    if(!isPasswordCorrect){
        return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET,{ expiresIn: '1h' }  )


    res.status(200).json({
         message: 'User logged in successfully',
         user,
          token
         });
        })


module.exports = authRouter