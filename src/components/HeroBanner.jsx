import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Banner from "../assets/images/banner.png";
import Button from "@mui/material/Button";

const HeroBanner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Stack
        sx={{
          mt: { lg: "200px", sm: "100px", md: "150px" },
          ml: { lg: "150px", md: "100px", sm: "50px" },
        }}
        spacing={3}
      >
        <Typography
          color={"#FF2625"}
          fontWeight={"600"}
          sx={{ fontSize: { lg: "24px", md: "15px", sm: "10px", xs: "8px" } }}
        >
          Fitness Club
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: "42px", md: "30px", sm: "20px", xs: "10px" },
            fontWeight: "700",
          }}
        >
          Small,Sweet And Repeat
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "16px", md: "12px", sm: "10px", xs: "8px" } }}
        >
          Checkout The Most Effective Excercises
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            width: { lg: "200px", md: "150px", sm: "130px", xs: "100px" },
            fontSize: { lg: "16px", md: "14px", sm: "10px", xs: "8px" },
          }}
          color="error"
          variant="contained"
        >
          Explore Excrcises
        </Button>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { lg: 104, md: 80, sm: 50, xs: 25 },
            opacity: 0.1,
          }}
        >
          Excercise
        </Typography>
      </Stack>
      <Stack>
        <img
          src={Banner}
          alt="banner"
          style={{ width: "50vw", height: "auto" }}
        />
      </Stack>
    </Box>
  );
};

export default HeroBanner;
