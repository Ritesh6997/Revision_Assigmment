const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: false ,default:null },
    ancestorsId:[{ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: false }],
});

const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;      