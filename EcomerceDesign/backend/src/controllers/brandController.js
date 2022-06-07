const express = require("express");
const router = express.Router();
const BrandModel = require("../models/brandMode");
router.get("/", async (req, res) => {
    try {
        const brand = await BrandModel.find().lean().exec();
        return res.status(200).send({ "brand": brand });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const brand = await BrandModel.findById(req.params.id).lean().exec();
        return res.status(200).send({ "brand": brand });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const brand = await BrandModel.create(req.body);
        return res.status(201).send({ "brand": brand });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const brand = await BrandModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(203).send({ "brand": brand });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const brand = await BrandModel.findByIdAndDelete(req.params.id);
        return res.status(204).send({ "brand": brand });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
module.exports=router