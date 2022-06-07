const mongoose = require("mongoose");
require('dotenv').config() 
export const connect = () => {
    return mongoose.connect(process.env.mongoUrl)
};