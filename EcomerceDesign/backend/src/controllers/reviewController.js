const express = require("express");
const router = express.Router();
const ReviewModel = require("../models/reviewsModel");
router.get("/", async (req, res) => {
    try {
        const review = await ReviewModel.find().lean().exec();
        return res.status(200).send({ "review": review });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const review = await ReviewModel.findById(req.params.id).lean().exec();
        return res.status(200).send({ "review": review });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.get("/product/:id", async (req, res) => {
    try {
        const review = await ReviewModel.find({ productId: req.params.id }).populate({ path:"userID"}).lean().exec();
        return res.status(200).send({ "review": review });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.get("/user/:id", async (req, res) => {
    try {
        const review = await ReviewModel.find({userID:req.params.id}).lean().exec();
        return res.status(200).send({ "review": review });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const review = await ReviewModel.create(req.body);
        return res.status(201).send({ "review": review });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const review = await ReviewModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(203).send({ "review": review });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const review = await ReviewModel.findByIdAndDelete(req.params.id);
        return res.status(204).send({ "review": review });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
module.exports = router;