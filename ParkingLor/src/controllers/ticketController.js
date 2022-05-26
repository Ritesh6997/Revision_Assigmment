
const express = require("express");
const router = express.Router();
const ParkingTicket = require("../model/parkingTicketModel");
const History =require("../model/historyModel")
router.get("/", async (req, res) => {
    try {
        const ticket = await ParkingTicket.find().lean().exec();
        return res.status(200).send({ "ticket": ticket });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const ticket = await ParkingTicket.create(req.body);
        const history = await History.create({
            ticket: ticket._id,
        });
        return res.status(201).send({ "ticket": ticket });
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

module.exports = router;
