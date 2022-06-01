const mongoose = require("mongoose");
const fandfSchema = new mongoose.model({
    followerId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    followingId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
},{
     versionKey: false,
    timestamps: true
});

const FandF = mongoose.model("F&F", fandfSchema);
module.exports = FandF;