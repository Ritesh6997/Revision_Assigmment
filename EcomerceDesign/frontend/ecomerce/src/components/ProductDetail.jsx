import React from 'react'
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Alert, Box, Button, CardMedia, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const [ele, setEle] = useState({})
  const userId = JSON.parse(localStorage.getItem("id"));
  let cartId = userId.cart;
  let wishlistId = userId.wishlist;
  useEffect(() => {
    axios.get(`http://localhost:5000/product/${id}`).then(res => {
      console.log(res.data)
      setEle(res.data.product)
    });
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
      {ele != undefined && (
        <Box
          border={"1px solid red"}
          fullWidth
          display={"flex"}
          justifyContent={"center"}
        >
          <CardMedia
            component="img"
            width={"50%"}
            style={{
              width: "50%",
              height: "400px",
              border: "1px solid red",
              objectFit: "contain",
            }}
            image={ele.img}
            alt="green iguana"
          />
          <Box
            width={"30%"}
            sx={{ p: "1% 10%", display: "flex",justifyContent:"space-evenly", flexDirection: "column",textAlign:"left"}}
            border={"1px solid green"}
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
            <Stack direction={"row"} sx={{alignItems:"center",mt:1}} spacing={2}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={"Size"}
                sx={{width: "30%", height:"40px" }}
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
                sx={{ width: "30%", height:"40px" }}
                label="Age"
              >
                <MenuItem value={"Colour"}>Colour</MenuItem>
                {ele.colour &&
                  ele.colour.map((e) => <MenuItem value={e}>{e}</MenuItem>)}
              </Select>
            </Stack>
            <Stack justifyContent={"space-between"} direction={"row"}>
              <h3 className="productpricetag" variant="h6">
                Price :
                {Math.round(
                  (ele.price / ele.price) * Math.random(1) * ele.price
                )}{" "}
                Rs{" "}
                <span style={{fontWeight:"normal"}}>
                  ({Math.round((ele.price / ele.price) * Math.random(1) * 100)}
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
                AddtoWishList()
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
  );
}
