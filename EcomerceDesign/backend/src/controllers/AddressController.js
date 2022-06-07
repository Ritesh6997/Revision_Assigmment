const express = require("express");
const router = express.Router();
const AddressModel = require("../models/AddressModel");
const UserModel = require("../models/userModel");
router.get("/:id", async (req, res) => {
    try {
        const address = await AddressModel.find(req.params.id).lean().exec();
        return res.status(200).send({ "address": address });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.post("/:id", async (req, res) => {
    try {
        const address = await AddressModel.create(req.body);
        const user=await UserModel.findByIdAndUpdate(req.params.id,{$push: { address: address._id }})
        return res.status(200).send({ "Address": address ,"user":user});
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const address = await AddressModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({ "address": address });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const address = await AddressModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({ "address": address });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;