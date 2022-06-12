const express = require("express");
const ProductModel = require("../models/productModel");
const BrandModel = require("../models/brandMode");
const router = express.Router();
router.get("/", async (req, res) => {
    try {
        console.log(1);
         const page = req.query.page || 1;
        const limit = 10;
        const skip = (page - 1) * limit;
        console.log(req.query)
        // sorting
        const sorting = req.query.sort.split(",");
        let sortby = sorting[0] || "_id";
        let sortorder = +(sorting[1]);
        // fitering
        // const fitering = req.query.filter.split(",");
        const fitering = req.query.filter
        let filterby = fitering[0] || "";
        let filterorder = fitering[1] || ""; 
        // if (searching[1] !== "") {
        //     console.log(2)
        //     filterby = searching[0];
        //     filterorder =`*${searching[1]}*`; 
        // }
        console.log(filterby, filterorder)
        console.log(2)
        const count = await ProductModel.find({[filterby]:filterorder}).count({});
        const product = await ProductModel.find({[filterby]:filterorder}).sort({[sortby]:sortorder }).skip(skip).limit(limit).lean().exec();
        return res.status(200).send({
            "product": product,
    "count":Math.ceil(count/limit)});
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id).populate({ path: "brand category" }).lean().exec();
        return res.status(200).send({ "product": product });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.post("/", async (req, res) => {
    console.log(1)
    console.log(req.body)
    try {

        const product = await ProductModel.create(req.body);
        const brand = await BrandModel.findByIdAndUpdate(req.body.brand, { $push: { "productsId": product._id } });
        return res.status(201).send({ "product": product,"brand":brand });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(203).send({ "product": product });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id);
        return res.status(204).send({ "product": product });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;