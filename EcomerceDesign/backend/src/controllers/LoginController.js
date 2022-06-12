const express=require("express");
const {login} = require("./authentication")
const { body, validationResult } = require('express-validator')
const router=express.Router()
const User=require("../models/userModel");
router.post("",
body('email').not().isEmpty().isEmail().
custom(async(value) => {
    const user= await User.findOne({"email":value}).lean().exec();
    if (!user) {
      throw new Error('Email is already register');
    }
    return true;
}),(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
},login)
module.exports=router;