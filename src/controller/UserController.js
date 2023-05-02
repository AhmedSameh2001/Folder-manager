const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const signUp = async (req , res) =>{

  const {userName , email , password} = req.body;
  try{
    const existingUser = await userModel.findOne({email : email});
    if(existingUser){
      return res.status(400).json({massage:"User already exist..."})
    }

    const hashPassword = await bcrypt.hash(password,10);

    const result = await userModel.created({
      email : email,
      password : hashPassword,
      userName : userName
    });

    const token = jwt.signUp({email : result.email , id : result.id}, SECRET_KEY)
    res.status(201).json({user : result, token : token});
  }catch(err){
    console.log(err);
    res.status(500).json({massage : "Something Went Wrong !!! "})
  }
}

const signIn = async (req , res) =>{
   const {userName , password} = req.body;

   try{
    const existingUser = await userModel.findOne({email : email});
    if(!existingUser){
      return res.status(400).json({massage:"User not found ..."})
    }

    const matchPassword = await bcrypt.compare(password , existingUser.hashPassword);

    if(!matchPassword){
      return res.status(400).json({massage : "Invalid Credentials"})
    }

    const token = jwt.signIn({userName : existingUser.userName , id : existingUser.id}, SECRET_KEY)
    res.status(201).json({user : existingUser, token : token});


   }catch(error){
    console.log(error);
    res.status(500).json({massage : "Something Went Wrong !!! "})
   }
}

module.exports = {signUp , signIn};