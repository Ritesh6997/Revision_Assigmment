import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack ,IconButton} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./navbar.css"
export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar
        style={{
          backgroundColor: "#16073e",
          color: "#f9f8fc",
        }}
        padding="10px"
      >
        <Typography variant="h6" component="span">
          <Link className="navbarelement" to={"/"}>
            Home
          </Link>
        </Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
          <Link className="navbarelement" to={"/"}>
            Amazon
          </Link>
        </Typography>
        <Stack direction="row" variant="h6" spacing={3}>
          <Typography variant="h6" component="span">
            <Link className="navbarelement" to={"/product"}>
              Products
            </Link>
          </Typography>
          <Typography variant="h6" component="span">
            <Link className="navbarelement" to={"/Signup"}>
              SignUp
            </Link>
          </Typography>
          <Typography variant="h6" component="span">
            <Link className="navbarelement" to={"/login"}>
              Login
            </Link>
          </Typography>
          <Typography variant="h6" component="span">
            <Link className="navbarelement" to={"/login"}>
              <IconButton color="inherit">
                <FavoriteIcon></FavoriteIcon>
              </IconButton>
            </Link>
          </Typography>
          <Typography variant="h6" component="span">
            <Link className="navbarelement" to={"/login"}>
              <IconButton color="inherit">
                <ShoppingCartIcon></ShoppingCartIcon>
              </IconButton>
            </Link>
          </Typography>
          <Typography variant="h6" component="span">
            <IconButton color="inherit">
              <AccountCircleIcon></AccountCircleIcon>
            </IconButton>
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
