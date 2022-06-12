import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { TextareaAutosize } from "@mui/material";
const theme = createTheme();
const userData = JSON.parse(localStorage.getItem("id"));
const userId = userData._id;
export default function Review({id}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let obj = {
      productId:id,
      userID: userId,
      discription: data.get("discription"),
      };
      console.log(obj);
    if (obj.discription !== "" && obj.password !== "") {
      axios
        .post("http://localhost:5000/review", obj)
        .then(function (response) {
          console.log(response);
          alert("Review Submited");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Discription is Required");
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
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>RV</Avatar>
          <Typography component="h1" variant="h5">
            Write a Review of Product
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextareaAutosize
              margin="normal"
              required
              style={{ width: 400, height: 200 }}
              name="discription"
              placeholder="Discription"
              type="discription"
              id="discription"
              autoComplete="current-discription"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
