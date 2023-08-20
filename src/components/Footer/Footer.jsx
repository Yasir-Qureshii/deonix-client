import React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

const pages = ["Home", "About", "Products", "Contact"];

const Footer = () => {
  return (
    <Sheet
      variant="solid"
      invertedColors
      sx={{
        backgroundColor: "#1e293b",
        flexGrow: 1,
        p: 2,
        mt: 10,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }} px={1}>
        <IconButton variant="plain">
          <FacebookRoundedIcon sx={{ color: "#f8fafc" }} />
        </IconButton>
        <IconButton variant="plain">
          <InstagramIcon sx={{ color: "#f8fafc" }} />
        </IconButton>
        <IconButton variant="plain">
          <TwitterIcon sx={{ color: "#f8fafc" }} />
        </IconButton>
        <IconButton variant="plain">
          <LinkedInIcon sx={{ color: "#f8fafc" }} />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Subscribe to our newsletter"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{
            ml: "auto",
            color: "#f8fafc",
            display: { xs: "none", md: "flex", color: "#f8fafc", width: "20%" },
          }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box sx={{ flexGrow: 0, display: { md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                mx: 1,
                color: "white",
                display: "block",
                fontSize: "12px",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Typography level="body-sm" sx={{ color: "#f8fafc" }}>
          Deonix © 2023
        </Typography>
      </Box>
    </Sheet>
  );
};

export default Footer;
