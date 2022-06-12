import { Box, Button, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

export default function Count({ele}) {
    const userId = JSON.parse(localStorage.getItem("id"));
    let cartId = userId.cart;
    const [count,setcount]=useState(ele.quantity)
    const handlecount = (idx, value) => {
        if (count === 1 && value == -1) {
            return;
        }
        setcount(prev => prev + value);
        handlerequest(idx,value);
    };
    const handlerequest = (idx,value) => {
        console.log(count,idx);
        axios
          .patch(`http://localhost:5000/cart/${cartId}/count/${idx}`, {
            count: count+value,
          })
          .then((res) => {
            console.log(res.data);
          });
    }
  return (
    <Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          textAlign: "left",
          pl: 3,
          width: 172,
        }}
      >
        <Typography component="div" variant="h6">
          <Button
            onClick={() => {
              handlecount(ele.productId._id,-1);
            }}
            variant="contained"
          >
            -
          </Button>
        </Typography>
        <Typography sx={{ textAlign: "left" }}>{count}</Typography>
        <Typography>
          <Button
            onClick={() => {
              handlecount(ele.productId._id ,1);
            }}
            variant="contained"
          >
            +
          </Button>
        </Typography>
      </CardContent>
    </Box>
  );
}
