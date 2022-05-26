const History = require("../model/historyModel");
const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
    try {
        const ticket = await History.find().lean().exec();
        return res.status(200).send({ "ticket": ticket });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const ticket = await History.find({ "ticketId":req.params.id }).lean().exec();
        return res.status(200).send({ "ticket": ticket });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/user/:id", async (req, res) => {
    try {
        const ticket = await History.find().lean(req.params.id).exec();
        return res.status(200).send({ "ticket": ticket });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;