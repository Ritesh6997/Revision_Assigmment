import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./card.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function MediaCard({ ele }) {
  console.log(ele, "vlaue")
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("id"));
  let cartId = userId.cart;
  let wishlistId = userId.wishlist;
  const AddtoCart = (id) => {
    console.log(1);
    axios
      .patch(`http://localhost:5000/cart/${cartId}/add/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Added to Cart Sucessfully");
      });
  };
  const AddtoWishList = (id) => {
    axios
      .patch(`http://localhost:5000/wishlist/${wishlistId}/add/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Added to Wishlist Sucessfully");
      });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="340"
        className="productimgdiv"
        image={ele.img}
        alt="green iguana"
        onClick={() => {
      console.log(ele._id);
      navigate(`/products/${ele._id}`);
    }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ele.title}
        </Typography>
        <Stack  justifyContent={"space-between"} direction={"row"}>
          <span className="productpricetag" variant="h6">Price :{ele.price} Rs</span>
          <FavoriteIcon onClick={() => {
            AddtoWishList(ele._id);
          }}></FavoriteIcon>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button onClick={() => {
          AddtoCart(ele._id);
        }} variant="contained" fullWidth>Add To Cart</Button>
      </CardActions>
    </Card>
  );
}
