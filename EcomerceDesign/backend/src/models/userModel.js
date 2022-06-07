const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String,match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,], required: true, unique: true },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address", required: false }],
    contactNo: { type: Number, required: true },
    password: { type: String, required: true },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: false },
    wishlist:{ type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: false}
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;