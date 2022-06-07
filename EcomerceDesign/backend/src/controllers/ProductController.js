const express = require("express");
const ProductModel = require("../models/productModel");
const router = express.Router();
router.get("/", async (req, res) => {
    try {
        const product = await ProductModel.find().lean().exec();
        return res.status(200).send({ "product": product });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id).lean().exec();
        return res.status(200).send({ "product": product });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const product = await ProductModel.create(req.body);
        return res.status(201).send({ "product": product });
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