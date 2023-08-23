import PropTypes from "prop-types";
import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";

import Bodypart from "../assets/icons/body-part.png";
import Equipment from "../assets/icons/equipment.png";
import Target from "../assets/icons/target.png";

import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

const Detail = ({ exerciseDetail }) => {
  const { name, gifUrl, bodyPart, target, equipment } = exerciseDetail;

  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md")); // Medium and up
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const getImageSize = () => {
    if (isMdScreen) {
      return "100px"; // Image width for medium and larger screens
    } else if (isSmScreen) {
      return "80px"; // Image width for small screens
    } else {
      return "60px"; // Default image width for extra-small screens
    }
  };

  const exerciseDescription = `Exercises keep you strong. ${name} bup is one of the best exercises to target your ${target}. It will help you improve your mood and gain energy.`;

  return (
    <Box sx={{ width: "80%", margin: "5% auto" }}>
      <Grid container spacing={3}>
        <Grid item lg={7} sm={12}>
          <img src={gifUrl} alt={name} width={"80%"} height={"auto"} />
        </Grid>
        <Grid item lg={5} sm={12}>
          <Typography
            fontWeight={700}
            sx={{
              fontSize: {
                lg: "24px",
                md: "22px",
                sm: "18px",
                xs: "18px",
                textTransform: "capitalize",
              },
              textAlign: { xs: "center", sm: "center" },
              margin: "30px 0px",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: { lg: "22px", xs: "16px" } }}
            color="#4F4C4C"
          >
            {exerciseDescription}
          </Typography>
          <Stack direction={"row"} sx={{ alignItems: "center", margin: "30px 0px" }} spacing={5}>
            <img
              src={Bodypart}
              style={{ backgroundColor: "#FFF2DB", borderRadius: "50%" }}
              width={getImageSize()}
              alt="Bodypart"
            />
            <Typography>Body Part</Typography>
          </Stack>
          <Stack direction={"row"} sx={{ alignItems: "center", margin: "30px 0px" }} spacing={5}>
            <img
              src={Equipment}
              style={{ backgroundColor: "#FFF2DB", borderRadius: "50%" }}
              width={getImageSize()}
              alt="Equipment"
            />
            <Typography>Equipment</Typography>
          </Stack>
          <Stack direction={"row"} sx={{ alignItems: "center", margin: "30px 0px" }} spacing={5}>
            <img
              src={Target}
              style={{ backgroundColor: "#FFF2DB", borderRadius: "50%" }}
              width={getImageSize()}
              alt="Target"
            />
            <Typography>Target</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

Detail.propTypes = {
  exerciseDetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
  }).isRequired,
};

export default Detail;

