const express = require("express");
const router = express.Router();
const Products = require("../models/productModel");



router.get("/", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = 10;
        const skip = (page - 1) * limit;
        const filter = req.query.filter;
        const products = await Products.find().skip(skip).limit(limit).lean().exec();
        return res.status(200).send({ "Products": products });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;
