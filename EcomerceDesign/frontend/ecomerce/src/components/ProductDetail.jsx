import React from 'react'
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Alert, Box, Button, Card, CardHeader, CardMedia, DialogTitle, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Review from './ReviewForm';

export default function ProductDetail() {
  const { id } = useParams();
  const [ele, setEle] = useState({})
  const userId = JSON.parse(localStorage.getItem("id"));
  let cartId = userId.cart;
  let wishlistId = userId.wishlist;
  const [discount,setDiscount]=useState(0);
  console.log(discount);
  useEffect(() => {
    axios.get(`http://localhost:5000/product/${id}`).then((res) => {
      console.log(res.data);
      setEle(res.data.product);
      setDiscount(
        (res.data.product.price / res.data.product.price) * Math.random()
      );
    });
    axios
      .get(`http://localhost:5000/review/product/${id}`)
      .then((res) => console.log(res.data));
  }, [])
  const AddtoCart = () => {
    console.log(1);
    axios.patch(`http://localhost:5000/cart/${cartId}/add/${id}`).then((res) => {
      console.log(res.data);
      alert("Added to Cart Sucessfully");
    });
  }
  const AddtoWishList = () => {
    axios.patch(`http://localhost:5000/wishlist/${wishlistId}/add/${id}`).then((res) => {
      console.log(res.data);
      alert("Added to Wishlist Sucessfully");
    });
  };
  console.log(id,ele);
  return (
    <div>
      <Typography sx={{ m: 1 }} variant="h4">
        Product Details
      </Typography>
      <div>
        {ele != undefined && (
          <Box
            sx={{ width: "75%", m: "auto" }}
            display={"flex"}
            justifyContent={"center"}
          >
            <CardMedia
              component="img"
              width={"50%"}
              style={{
                width: "50%",
                height: "400px",
                objectFit: "contain",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
              }}
              image={ele.img}
              alt="green iguana"
            />
            <Box
              width={"50%"}
              sx={{
                p: "1% 10%",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                textAlign: "left",
              }}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {ele.title}
              </Typography>
              {ele.brand && (
                <Typography gutterBottom variant="h6" component="div">
                  (Brand Name: {ele.brand.name})
                </Typography>
              )}
              <Typography>
                Discrption:Product Description About Product
              </Typography>
              <Stack
                direction={"row"}
                sx={{ alignItems: "center", mt: 1 }}
                spacing={2}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={"Size"}
                  sx={{ width: "30%", height: "40px" }}
                  label="Age"
                >
                  <MenuItem value={"Size"}>Size</MenuItem>
                  {ele.size &&
                    ele.size.map((e) => <MenuItem value={e}>{e}</MenuItem>)}
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={"Colour"}
                  sx={{ width: "30%", height: "40px" }}
                  label="Age"
                >
                  <MenuItem value={"Colour"}>Colour</MenuItem>
                  {ele.colour &&
                    ele.colour.map((e) => <MenuItem value={e}>{e}</MenuItem>)}
                </Select>
              </Stack>
              <Stack justifyContent={"space-between"} direction={"row"}>
                <h3 className="productpricetag" variant="h6">
                  Price :{Math.round((1 - discount) * ele.price)} Rs{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {Math.round(discount * 100)}
                    %off)
                  </span>
                </h3>
                <h3
                  style={{ textDecoration: "line-through" }}
                  className="productpricetag"
                  variant="h6"
                >
                  Price :{ele.price} Rs
                </h3>

                {/* <FavoriteIcon></FavoriteIcon> */}
              </Stack>
              <Button
                onClick={() => {
                  AddtoWishList();
                }}
                fullWidth
                variant="contained"
                sx={{
                  mb: 1,
                  p: "10Px",
                  bgcolor: "#0e0c04",
                }}
              >
                Add To Wishlist
              </Button>
              <Button
                onClick={() => {
                  AddtoCart();
                }}
                sx={{
                  mb: 1,
                  p: "10Px",
                  color: "#000",
                  bgcolor: "#ebb105",
                }}
                fullWidth
                variant="contained"
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        )}
      </div>
      <Review id={id} />
    </div>
  );
}
