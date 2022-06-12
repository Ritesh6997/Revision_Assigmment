const express = require("express");
const router = express.Router();
const WishlistModel = require("../models/wishlistModel");

router.get("/:id", async (req, res) => {
    console.log(1)
    try {
        const wishlist = await WishlistModel.findById(req.params.id).populate({ path:"productId" });
        return res.status(201).send({ "wishlist": wishlist });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.patch("/:id/add/:idx", async (req, res) => {
    try {
        const wishlist = await WishlistModel.findByIdAndUpdate(req.params.id,{$push: { productId: req.params.idx }});
        return res.status(201).send({ "wishlist": wishlist });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});
router.patch("/:id/delete/:idx", async (req, res) => {
    try {
        const wishlist = await WishlistModel.findByIdAndUpdate(req.params.id, { $pull: { productId: req.params.idx } });
        return res.status(201).send({ "wishlist": wishlist });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;
