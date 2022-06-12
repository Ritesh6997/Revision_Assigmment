const express = require("express");
const router = express.Router();
const CartModel = require("../models/cartModel");

router.get("/:id", async (req, res) => {
    try {
        console.log(1)
        const cart = await CartModel.findById(req.params.id).populate({ path: "products_quity.productId", populate: { path: "brand" } });
        console.log(cart);
        return res.status(201).send({ "Cart": cart });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.patch("/:id/count/:idx", async (req, res) => {
            console.log(1);
    try {
        const cart = await CartModel.updateOne({"_id":req.params.id,"products_quity.productId": req.params.idx },{ $set: { "products_quity.$.quantity": req.body.count} });
        return res.status(201).send({ "Cart": cart });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.patch("/:id/add/:idx", async (req, res) => {
    try {
        console.log(1)
        const cart = await CartModel.findByIdAndUpdate(req.params.id, { $push: { products_quity: { "productId":req.params.idx,"quantity": 1}}});
        return res.status(201).send({ "Cart": cart });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.patch("/:id/delete/:idx", async (req, res) => {
    try {
        const cart = await CartModel.findByIdAndUpdate(req.params.id, { $pull: { products_quity: { productId: req.params.idx } } });
        return res.status(201).send({ "Cart": cart });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;
