const express = require("express");
const router = express.Router();
const Post = require("../models/PostModel");

router.get("/:id", async (req, res) => {
    try {
        const posts = await Post.find(req.params.id).lean().exec();
        return res.status(200).send({ "posts": posts });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.get("user/:id", async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.params.id }).lean().exec();
        return res.status(200).send({ "posts": posts });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.post("", async (req, res) => {
    try {
        const posts = await Post.create(req.body);
        return res.status(201).send({ "posts": posts });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const posts = await Post.findByIdAndUpadate(req.params.id,req.body);
        return res.status(201).send({ "posts": posts });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const posts = await Post.findByIdAndDelete(req.params.id);
        return res.status(201).send({ "posts": posts });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;