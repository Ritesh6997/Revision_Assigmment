const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: {
        type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true
    },
    discription: { type: String, required: true }
});

const ReviewModel = mongoose.model("Review", reviewSchema);
module.exports = ReviewModel;