import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";
const theme = createTheme();

export default function Addaddress() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const ID = JSON.parse(localStorage.getItem("id"));
    const userID = ID._id;
      let obj = {
      addressLine1: data.get("Line1"),
      city: data.get("city"),
      pincode: Number(data.get("pincode")),
      state: data.get("state"),
      country: data.get("country"),
    };
    if (
      obj.addressLine1 !== "" ||
      obj.city !== "" ||
      obj.pincode !== "" ||
      obj.state !== "" ||
      obj.country !== ""
    ) {
      axios
        .post(`http://localhost:5000/${userID}/address`, obj)
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 1,
            padding: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <h3>AA</h3>
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Address
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
                  autoComplete="given-Address"
                  name="Line1"
                  required
                  fullWidth
                  id="Line1"
                  label="Address Line1"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-city"
                  name="city"
                  required
                  fullWidth
                  id="city"
                  label="City Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-pincode"
                  name="pincode"
                  required
                  fullWidth
                  type={"number"}
                  id="pincode"
                  label="Enter Pincode"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-state"
                  name="state"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-country"
                  name="country"
                  required
                  fullWidth
                  id="country"
                  label="Country Name"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
