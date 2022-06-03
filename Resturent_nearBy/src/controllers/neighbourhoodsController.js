const express = require("express");
const router = express.Router();
const Neighborhood = require("../models/neighbourhoods");

router.get("/", async (req, res) => {
    try {
        const neighborhood = await Neighborhood.find().lean().exec();
        return res.status(200).send({ "neighborhood": neighborhood });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const neighborhood = await Neighborhood.create(req.body);
        return res.status(201).send({ "neighborhood": neighborhood });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;