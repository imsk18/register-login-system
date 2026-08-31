const userModel =require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const registerController = async(req,res)=>{
    const {email,password,fullName} = req.body;

    const isUserExists = await userModel.findOne({email});
    if(isUserExists){
        return res.status(409).json({
            message:"user already exists with this username "
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        email,
        password:hash,
        fullName
    });
    
    const token = jwt.sign({
        id: user._id,
        fullName: user.fullName
    },process.env.JWT_SECRET)

    res.cookie("token",token)



    res.status(201).json({
        message:"register success",
        user,
        token
    })
}

const loginController = async(req,res)=>{
    const {email ,password} = req.body
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(401).json({
            message:"user not found"

        })
    }

    const isPasswordCorrect =  await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
        return res.status(401).json({
            message:"invalid password"
        })
    }

    const token = jwt.sign({
        id:user._id,

    },process.env.JWT_SECRET)

    res.cookie("token",token);

    res.status(200).json({
        message:"login success ",
        token
    })

}

module.exports = {
    registerController,
    loginController
}