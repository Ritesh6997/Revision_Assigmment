const express = require("express");
const router = express.Router();
const Restaurant = require("../models/resturentModel");

router.get("/", async (req, res) => {
    try {
        const resturant = await Restaurant.find().lean().exec();
        return res.status(200).send({ "resturant": resturant });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.post("/distance", async (req, res) => {
    try {
        let longitude = req.body.longitude;
        let latitude = req.body.latitude;
        const resturant =await Restaurant.find({ location:
   { $geoWithin:
      { $centerSphere: [ [longitude, latitude], req.body.radius/ 3963.2 ] } } })
        return res.status(200).send({ "resturant": resturant });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.post("/nearestdistance", async (req, res) => {
    try {
        let longitude = req.body.longitude;
        let latitude = req.body.latitude;
        let METERS_PER_MILE = 1609.34
        const resturant = await Restaurant.find({ location: { $nearSphere: { $geometry: { type: "Point", coordinates: [longitude, latitude] }, $maxDistance: 5 * METERS_PER_MILE } } });
        return res.status(200).send({ "resturant": resturant });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const resturant = await Restaurant.create(req.body);
        return res.status(201).send({ "resturant": resturant });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports=router;
