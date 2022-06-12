const User=require("../models/userModel");
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator')
require('dotenv').config()
const CartModel = require("../models/cartModel");
const WishlistModel = require("../models/wishlistModel");
const generateToken = (user) => {
    // console.log(process.env.SECRET_KEY)
    return jwt.sign({user}, process.env.SECRET_KEY)
}

const Signup=async(req,res)=>{
    console.log(req.body);
    try {
        let user =await User.findOne({email:req.body.email});
        console.log(user)
        if (user){
           return res.status(400).send("email is already exists ")
        }
        user = await User.create(req.body);
        const cart = await CartModel.create({products_quity:[]});
        const wishlist = await WishlistModel.create({productId:[]});
        const userupdate = await User.findByIdAndUpdate(user._id, { cart: cart._id, wishlist: wishlist._id });
        const token = generateToken(user);
        return res.status(200).send({user, token});

    } catch (error) {
       return  res.status(400).send(error.message)
    }
}

const login = async (req, res) => {
    try{

        const user = await User.findOne({email : req.body.email})
        //checked if mail exists
        if(!user){
            return res.status(400).send("Wrong Email or Password")
        }
        //if email exists, check password;
        const match = user.checkPassword(req.body.password)

        // if it doesn't match
        if(!match){
            return res.status(400).send({message : "Wrong Email or Password"})
        }
        // if it matches
        const token = generateToken(user)
        return res.status(200).send({user, token});
    }
    catch(err){
        
       return res.status(400).send({message : err.message})
    }
}

module.exports = {Signup,login,generateToken}





