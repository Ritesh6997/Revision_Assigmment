import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack ,IconButton,Menu,MenuItem} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./navbar.css"
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const userId = JSON.parse(localStorage.getItem("id"));
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <Typography variant="h6"sx={{verticalAlign:"middle"}} component="span">
            <Link style={{verticalAlign:"middle"}} className="navbarelement" to={"/product"}>
              PRODUCT
            </Link>
          </Typography>
          {!userId &&<Typography variant="h6" component="span">
            <Link className="navbarelement" to={"/Signup"}>
              SignUp
            </Link>
          </Typography>}
          {!userId &&<Typography variant="h6" component="span">
            <Link className="navbarelement" to={"/login"}>
              Login
            </Link>
          </Typography>}
          <Typography variant="h6" component="span">
            <Link className="navbarelement" to={"/wishlist"}>
              <IconButton color="inherit">
                <FavoriteIcon></FavoriteIcon>
              </IconButton>
            </Link>
          </Typography>
          <Typography variant="h6" component="span">
            <Link className="navbarelement" to={"/cart"}>
              <IconButton color="inherit">
                <ShoppingCartIcon></ShoppingCartIcon>
              </IconButton>
            </Link>
          </Typography>
          <Typography variant="h6" component="span">
            <IconButton
              size="small"
              sx={{ ml: 2 }}
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              color="inherit"
            >
              <AccountCircleIcon></AccountCircleIcon>
            </IconButton>
          </Typography>
        </Stack>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>MyAccount</MenuItem>
          <MenuItem onClick={() => {
            localStorage.removeItem("id")
          }}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

