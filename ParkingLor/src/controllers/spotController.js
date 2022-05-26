const express = require("express");
const router = express.Router();
const ParkingSpot = require("../model/parkingSlotModel");

router.get("/", async (req, res) => {
    try {
        const spot = await ParkingSpot.find().lean().exec();
        return res.status(200).send({ "Spot": spot });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/floor/:no", async (req, res) => {
    try {
        const spot = await ParkingSpot.find({"floorNo":req.params.no}).lean().exec();
        return res.status(200).send({ "Spot": spot });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const spot = await ParkingSpot.create(req.body);
        return res.status(201).send({ "spot": spot });
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const spot = await ParkingSpot.findByIdAndUpdate(_id = req.params.id, req.body, {
            new: true,
        });
        return res.status(201).send({ "spot": spot });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;