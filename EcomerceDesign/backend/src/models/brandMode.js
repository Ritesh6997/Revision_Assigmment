const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema({
    name: { type: String, required: true },
    productsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: false }],

});

const BrandModel = mongoose.model("Brand", brandSchema);

module.exports = BrandModel;
