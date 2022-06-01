const express = require('express');

const router = express.Router();
const FandF = require("../models/followers_following");

router.get("follower/:id", async (req, res) => {
    try {
        const fandf = await FandF.find({ following: req.params.id }).lean().exec();
        return res.status(200).send({ "follower": fandf });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.get("following/:id", async (req, res) => {
    try {
        const fandf = await FandF.find({ follower: req.params.id }).lean().exec();
        return res.status(200).send({ "following": fandf });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
router.post("", async (req, res) => {
    try {
        const fandf = await FandF.create(req.body);
        return res.status(201).send({ "following": fandf });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});
module.exports = router;