const express = require("express");
const router = express.Router();
const CategoryModel = require("../models/categoriesModel");
router.get("/", async (req, res) => {
    try {
        const category = await CategoryModel.find().lean().exec();
        return res.status(200).send({ "category": category });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const category = await CategoryModel.findById(req.params.id).populate({ path: "ancestorsId parentId" }).lean().exec();
        return res.status(200).send({ "category": category });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const category = await CategoryModel.create(req.body);
        if (req.body.parentId) {
            const categoryparent = await CategoryModel.findById(req.body.parentId);
            if (categoryparent.ancestorsId.length > 0) {
                const categoryupdate = await CategoryModel.findByIdAndUpdate(category._id, { $push: { "ancestorsId": { $each: [...categoryparent.ancestorsId, category.parentId] } } });
            }
            else {
                if (category.parentId) {
                    const categoryupdate = await CategoryModel.findByIdAndUpdate(category._id, { $push: { "ancestorsId": category.parentId } });
                }
            }
        }
        return res.status(201).send({
            "category": category
        });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const category = await CategoryModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(203).send({ "category": category });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const category = await CategoryModel.findByIdAndDelete(req.params.id);
        return res.status(204).send({ "category": category });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
module.exports=router