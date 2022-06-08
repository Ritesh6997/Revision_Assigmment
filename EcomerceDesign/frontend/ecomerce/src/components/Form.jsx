import  React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import axios from "axios";
const theme = createTheme();

export default function Form() {
  const [BrandName, setBrandName] = useState([]);
   useEffect(() => {
     axios.get("http://localhost:5000/brand").then(res => {
       console.log(res.data.brand);
       setBrandName([...res.data.brand]);
     });
   }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let obj = {
      title: data.get("productTitle"),
      brand: data.get("brand"),
      img: data.get("imgurl"),
      quantity: Number(data.get("quantity")),
      price: Number(data.get("price")),
      size: data.get("size").split(","),
      colour: data.get("colour").split(","),
    };
    if (
      obj.title !== "" &&
      obj.brand !== "" &&
      obj.img !== "" &&
      obj.quantity !== NaN &&
      obj.price !== NaN &&
      obj.size !== "" &&
      obj.colour !== ""
    ) {
      axios
        .post("http://localhost:5000/user", obj)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("All filed are Required");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <h3>AP</h3>
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Product
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="productTitle"
                  required
                  fullWidth
                  id="productTitle"
                  label="Product Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="imgurl"
                  label="Image Url"
                  name="imgurl"
                  autoComplete="imgurl"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                  <Select
                    required
                    fullWidth
                    id="brand"
                    label="Select Brand"
                    autoComplete="Brand"
                  >
                    {BrandName.length > 0 &&
                      BrandName.map((ele) => (
                        <MenuItem value={ele._id}>{ele.name}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="Price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="quantity"
                  label="Quantity"
                  id="quantity"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="size"
                  label="Enter All the Sizes of the product seperated by , "
                  id="size"
                  autoComplete="size"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="colour"
                  label="Enter All the colour of the product seperated by , "
                  id="colour"
                  autoComplete="new-colour"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
