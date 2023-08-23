import React, { useContext } from "react";
import gymIcon from "../assets/icons/gym.png";
import { Box, Stack, Typography } from "@mui/material";
import "../css/Bodypart.styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { fetchData } from "../utils/fetchData";
import { ExcerciseContext } from "../context/ExcerciseContext";

const BodyPart = ({ item }) => {
  const { excercise, setExcercise } = useContext(ExcerciseContext);

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

  const handleSelect = async (selectedItem) => {
    const searchedData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises"
    );
    if (selectedItem === "all") {
      setExcercise(searchedData);
    } else {
      const searchedExcercises = searchedData.filter(
        (excercise) =>
          excercise.name.toLowerCase().includes(selectedItem) ||
          excercise.target.toLowerCase().includes(selectedItem) ||
          excercise.equipment.toLowerCase().includes(selectedItem) ||
          excercise.bodyPart.toLowerCase().includes(selectedItem)
      );
      setExcercise(searchedExcercises);
    }
  };

  return (
    <Box className="bodypart-container" onClick={() => handleSelect(item)}>
      <img src={gymIcon} width={getImageSize()} alt="gym icon" />
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: { lg: "20px", md: "18px", sm: "14px", xs: "10px" },
        }}
      >
        {item.substr(0, 1).toUpperCase() + item.substr(1)}
      </Typography>
    </Box>
  );
};

export default BodyPart;
