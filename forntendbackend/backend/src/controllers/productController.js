const express = require("express");
const router = express.Router();
const Products = require("../models/productModel");



router.get("/", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = 10;
        const skip = (page - 1) * limit;
        console.log(req.query)
        // sorting
        const sorting = req.query.sort.split(",");
        let sortby = sorting[0] || "_id";
        let sortorder = +(sorting[1]);
        // fitering 
        const fitering = req.query.filter.split(",");
        const searching = req.query.search.split(",");
        let filterby = fitering[0] || "";
        let filterorder = fitering[1] || ""; 
        if (searching[1] !== "") {
            console.log(2)
            filterby = searching[0];
           filterorder = searching[1]; 
        }
        console.log(filterby,filterorder)
        const count = await Products.find({[filterby]:filterorder}).count({});
        const products = await Products.find({[filterby]:filterorder}).sort({[sortby]:sortorder }).skip(skip).limit(limit).lean().exec();
        return res.status(200).send({
            "Products": products,
            "count":Math.ceil(count/limit)});
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;
