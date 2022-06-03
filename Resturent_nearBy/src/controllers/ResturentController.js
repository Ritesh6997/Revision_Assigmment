const express = require("express");
const router = express.Router();
const Resturent = require("../models/resturentModel");

router.get("/", async (req, res) => {
    try {
        const resturent = await Resturent.find().lean().exec();
        return res.status(200).send({ "resturent": resturent });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const resturent = await Resturent.create(req.body);
        return res.status(201).send({ "resturent": resturent });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports=router;
