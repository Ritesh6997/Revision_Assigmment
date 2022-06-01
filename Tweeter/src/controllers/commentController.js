const express = require("express");
const router = express.Router();
const Comment = require("../models/comments");

router.get("/:id", async (req, res) => {
    try {
        const comments = await Comment.find({ postID: req.params.id }).lean().exec();
        return res.status(200).send({ "Comments": comments });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.post("", async (req, res) => {
    try {
        const comments = await Comment.create(req.body);
        return res.status(201).send({ "Comments": comments });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const comments = await Comment.findByIdAndUpadate(req.params.id,req.body);
        return res.status(201).send({ "comments": comments });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const comments = await Comment.findByIdAndDelete(req.params.id);
        return res.status(201).send({ "comments": comments });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
module.exports = router;

