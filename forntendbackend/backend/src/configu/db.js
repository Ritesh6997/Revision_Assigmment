const mongoose = require("mongoose");
require('dotenv').config()
const connect = () => {
    return mongoose.connect(process.env.dbUrl);
};
module.exports = connect;