const express = require('express')
const { Signup} = require('./authentication')
const { body, validationResult } = require('express-validator')
const router = express.Router()
const User = require("../models/userModel");

router.post(
  '',
  body('firstName').trim().not().isEmpty().isLength({min:3}),
  body('email')
    .not()
    .isEmpty()
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value }).lean().exec()
      if (user) {
        throw new Error('Email is already register')
      }
      return true
    }),
    body("contactNo").not().isEmpty().isNumeric().isLength({min:10,max:10}),
    body("lastName").not().isEmpty().trim().isLength({min:2}),
  body('password').isString().isLength({ min: 8 }).not().isLowercase().not()
    .isUppercase().not().isNumeric().not().isAlpha(),(req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
  Signup,
)
module.exports = router
