const mongoose = require("mongoose");
const wishlistSchema = new mongoose.Schema({
    productId:[{
        type: mongoose.Schema.Types.ObjectId, ref: "Product", required: false
    }],
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
