const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    products_quity: [[{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: false }, { type: Number, required: false }]],
});

const CartModel = mongoose.model("Cart", cartSchema);
module.exports = CartModel;