import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import Count from './Count';
import { useState } from 'react';
const userId = JSON.parse(localStorage.getItem("id"));
let cartId = userId.cart;
export default function Cart() {
  const [cartData, setcartData] = React.useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const theme = useTheme();
    useEffect(() => {
    axios.get(`http://localhost:5000/cart/${cartId}`).then((res) => {
      console.log(res.data.Cart.products_quity);
      const sum = res.data.Cart.products_quity.reduce(function (total, arr) {
        return total + (arr.productId.price * arr.quantity);
      }, 0);
      setTotalSum(sum);
        setcartData([...res.data.Cart.products_quity]);
    });
    }, []);
  const handleDelete = (idx) => {
    console.log(idx)
     axios.patch(`http://localhost:5000/cart/${cartId}/delete/${idx}`).then(res=>console.log(res.data));
  };  
    return (
      <Box sx={{ width: "80%", m: "auto", mt: 2 }}>
        <Card>
          {" "}
          <Typography variant="h4" sx={{ mt: 2 }}>
            MY CART
          </Typography>
          <Typography sx={{ display:"flex",justifyContent:"space-between", m:"10px" }}>
            <Typography sx={{ textAlign: "right", mr: "10px" }} variant="h5">
              Total Sum : {totalSum} <span>Rs</span>
            </Typography>{" "}
            <Button sx={{ mb: 1 }} variant='contained'>Procced To Checkout</Button>
          </Typography>
        </Card>
        {cartData.length > 0 &&
          cartData.map((ele) => (
            <Card sx={{ display: "flex", justifyContent: "center" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={ele.productId.img}
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardContent
                  sx={{ flex: "column", textAlign: "left", pl: 3, width: 152 }}
                >
                  <Typography component="div" variant="h6">
                    {ele.productId.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {ele.productId.brand.name}
                  </Typography>
                  <Typography>
                    Price:{ele.productId.price * ele.quantity}/Rs
                  </Typography>
                </CardContent>
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
                  <Count ele={ele} />
                </CardContent>
                <CardContent
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    textAlign: "left",
                    pl: 3,
                    width: 172,
                  }}
                >
                  <Button
                    onClick={() => {
                      handleDelete(ele.productId._id);
                    }}
                    sx={{ bgcolor: "#000" }}
                    variant="contained"
                  >
                    {" "}
                    Remove
                  </Button>
                </CardContent>
              </Box>
            </Card>
          ))}
        <Card>
          {" "}
          <Button variant="contained" sx={{ mt: 2 }}>
            Procced TO Checkout
          </Button>
        </Card>
      </Box>
    );
}