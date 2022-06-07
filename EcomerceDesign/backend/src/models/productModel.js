const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
    img: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    size: [{ type: Number, required: false }],
    colour: [{ type: String, required: false }],
    category:[{type:mongoose.Schema.Types.ObjectId,ref:"Category",required:true}]
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;