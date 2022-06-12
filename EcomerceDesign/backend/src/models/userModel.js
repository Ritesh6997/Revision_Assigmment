const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName:{type:String,required:true},
    email: { type: String,match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,], required: true, unique: true },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address", required: false }],
    contactNo: { type: Number, required: true },
    password: { type: String, required: true },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: false },
    wishlist:{ type: mongoose.Schema.Types.ObjectId, ref: "Wishlist", required: false}
});


userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
});

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;