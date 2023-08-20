import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import the ShoppingCart icon

const pages = ["Home", "About", "Products", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isAddToCartVisible, setIsAddToCartVisible] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setIsAddToCartVisible(!isAddToCartVisible);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1e293b" }}>
      <Container maxWidth="xl">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          py={{ md: 2, sm: 0 }}
          px={2}
        >
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DEONIX
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
              marginLeft: "auto",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mx: 1, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <Tooltip title="Your Cart">
              <IconButton sx={{ p: 0 }}>
                <ShoppingCartIcon sx={{ color: "white" }} />{" "}
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <IconButton sx={{ p: 0 }}>
                  <ShoppingCartIcon sx={{ color: "black" }} />
                </IconButton>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
