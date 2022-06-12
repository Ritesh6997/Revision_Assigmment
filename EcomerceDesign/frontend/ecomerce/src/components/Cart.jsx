import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
const userId = JSON.parse(localStorage.getItem("id"));
let cartId = userId.cart;
export default function Cart() {
    const [cartData,setcartData]=React.useState([])
  const theme = useTheme();
    useEffect(() => {
    axios.get(`http://localhost:5000/cart/${cartId}`).then((res) => {
        console.log(res.data.Cart.products_quity);
        setcartData([...res.data.Cart.products_quity]);
    });
    }, []);
    
    return (
      <Box>
        {cartData.length > 0 &&
          cartData.map((ele) => (
            <Card sx={{ display: "flex" }}>
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
                  <Typography>Price:{ele.productId.price}</Typography>
                </CardContent>
                <CardContent
                          sx={{ display:"flex",flexDirection: "row", alignItems:"center", justifyContent:'space-evenly', textAlign: "left", pl: 3, width: 172 }}
                >
                  <Typography component="div" variant="h6">
                    <Button variant="contained">-</Button>
                  </Typography >
                    <Typography sx={{textAlign:"left"}}>{ele.quantity}</Typography>
                  <Typography>
                    <Button variant="contained">+</Button>
                  </Typography>
                </CardContent>
                      
              </Box>
            </Card>
          ))}
      </Box>
    );
}