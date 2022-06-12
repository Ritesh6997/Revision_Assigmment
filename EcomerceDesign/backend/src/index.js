const express = require("express");
const app = express();
const cors=require("cors");
app.use(cors());
const UserController = require("./controllers/userController");
const ProductController = require("./controllers/ProductController");
const BrandController = require('./controllers/brandController');
const CategoryController = require("./controllers/CategoryController")
const WishlistController=require("./controllers/whishlistController")
const SignupController = require("./controllers/SignupController");
const LoginController = require("./controllers/LoginController");
const CartController = require("./controllers/cartController");
const ReviewController=require("./controllers/reviewController")
app.use(express.json());
app.use("/user", UserController);
app.use("/product", ProductController);
app.use("/wishlist", WishlistController);
app.use("/cart", CartController);
app.use("/brand", BrandController);
app.use("/category", CategoryController);
app.use("/signup", SignupController);
app.use("/login", LoginController);
app.use("/review", ReviewController);
module.exports = app;