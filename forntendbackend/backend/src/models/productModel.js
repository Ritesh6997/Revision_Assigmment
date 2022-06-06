const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ["men's clothing", "women's clothing"], required: true },
    image: { type: String, required: true },
    rating: {
        rate: { type: Number, required: true },
        count: { type: Number, required: true }
    }
});

const Products = mongoose.model("product",productSchema);

module.exports = Products;