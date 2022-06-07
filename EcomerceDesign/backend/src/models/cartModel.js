const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    products_quity: [[{ productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: false } }, { quantity: { type: Number, required: false,default:1} }]],
});

const CartModel = mongoose.model("Cart", cartSchema);
module.exports = CartModel;