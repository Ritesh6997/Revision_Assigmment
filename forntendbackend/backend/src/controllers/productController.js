const express = require("express");
const router = express.Router();
const Products = require("../models/productModel");



router.get("/", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = 10;
        const skip = (page - 1) * limit;
        const sorting = req.query.sort.split(",");
        console.log(sorting[0],sorting[1]);
        let sortby = sorting[0] || "_id";
        let sortorder = +(sorting[1]);
        console.log(sortorder);
        console.log(sortorder, sortby);
        const count = await Products.count({});
        const products = await Products.find().sort({[sortby]:sortorder }).skip(skip).limit(limit).lean().exec();
        return res.status(200).send({
            "Products": products,
            "count":Math.ceil(count/limit)});
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;
