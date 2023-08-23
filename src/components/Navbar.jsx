import React from "react";
import { Box, Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import "../css/Navbar.styles.css"

const Navbar = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          padding: "6px 0px",
        }}
      >
        <Link to={"/"}>
          <img
            src={Logo}
            alt="logo"
            width={"48px"}
            height={"48px"}
            style={{ margin: "0px 20px" }}
          />
        </Link>
        <Stack direction={"row"} spacing={4} m={'auto'}>
          <Link
          className="navbar-link"
            to={"/"}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#3A1212",
              position:'relative'
            }}
          >
            Home
          </Link>
          {/* <Link
          className="navbar-link"
            to={"/excercise/1"}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#3A1212",
              position:'relative'
            }}
          >
            Excercise
          </Link> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
