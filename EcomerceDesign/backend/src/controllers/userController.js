const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");
const AddressModel = require("../models/AddressModel");
const CartModel = require("../models/cartModel");
const WishlistModel = require("../models/wishlistModel");
router.get("/", async (req, res) => {
    try {
        const user = await UserModel.find().lean().exec();
        return res.status(200).send({ "User": user });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id).lean().exec();
        return res.status(200).send({ "User": user });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.post("/", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        const cart = await CartModel.create({products_quity:[]});
        const wishlist = await WishlistModel.create({productId:[]});
        const userupdate = await UserModel.findByIdAndUpdate(user._id, { cart: cart._id, wishlist: wishlist._id });
        return res.status(201).send({ "User": user });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(203).send({ "User": user });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        return res.status(204).send({ "User": user });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.get("/:id/address/idx", async (req, res) => {
    try {
        const address = await AddressModel.find(req.params.id).lean().exec();
        return res.status(200).send({ "address": address });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.post("/:id/address", async (req, res) => {
    try {
        const address = await AddressModel.create(req.body);
        const user=await UserModel.findByIdAndUpdate(req.params.id,{$push: { address: address._id }})
        return res.status(200).send({ "Address": address ,"user":user});
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.patch("/address/:idx", async (req, res) => {
    try {
        const address = await AddressModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({ "address": address });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.delete("/:id/address/:idx", async (req, res) => {
    try {
        const address = await AddressModel.findByIdAndDelete(req.params.idx);
        const user = await UserModel.findByIdAndUpdate(req.params.id, { $pull: { address:req.params.idx }});
        return res.status(200).send({ "address": address });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
module.exports = router;