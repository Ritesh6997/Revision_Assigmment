const express = require("express");
const router = express.Router();
const Neighborhood = require("../models/neighbourhoods");
const Restaurents = require("../models/resturentModel");
router.get("/", async (req, res) => {
    try {
        const neighborhood = await Neighborhood.find().lean().exec();
        return res.status(200).send({ "neighborhood": neighborhood });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.post("/NearestNeighborhood", async (req, res) => {
    try {
        let longitude = req.body.longitude;
        let latitude = req.body.latitude;
        const neighborhood=await Neighborhood.findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [longitude, latitude] } } } });
        return res.status(200).send({ "neighborhood": neighborhood });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
})

router.post("/resturents", async (req, res) => {
    try {
        let longitude = req.body.longitude;
        let latitude = req.body.latitude;
        const neighborhood = await Neighborhood.findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [longitude, latitude] } } } });
        const restaurants = await Restaurents.find( { location: { $geoWithin: { $geometry: neighborhood.geometry } } } ).count()
        return res.status(200).send({ "neighborhood": restaurants });
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