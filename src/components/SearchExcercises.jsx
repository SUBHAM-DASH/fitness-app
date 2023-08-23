import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import { ExcerciseContext } from "../context/ExcerciseContext";

const SearchExcercises = ({ bodyParts, setBodyParts }) => {
  const [search, setSearch] = useState("");

  const { excercise, setExcercise } = useContext(ExcerciseContext);

  useEffect(() => {
    const fetchBodypartsData = async () => {
      const bodyParsedData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`
      );
      setBodyParts(["all", ...bodyParsedData]);
    };
    fetchBodypartsData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const searchedData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises"
      );
      const searchedExcercises = searchedData.filter(
        (excercise) =>
          excercise.name.toLowerCase().includes(search) ||
          excercise.target.toLowerCase().includes(search) ||
          excercise.equipment.toLowerCase().includes(search) ||
          excercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExcercise(searchedExcercises);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "80px 0px",
        flexDirection: "column",
        gap: "60px",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { lg: "40px", md: "30px", sm: "25px", xs: "18px" },
        }}
      >
        Awesome Excercises <br />
        You Should Know
      </Typography>
      <Box>
        <TextField
          sx={{
            input: {
              height: { lg: "5px", xs: "2px" },
              width: { lg: "840px", md: "550px", sm: "350px", xs: "200px" },
              fontSize: { xs: "12px", md: "16px" },
            },
          }}
          placeholder="Search Excercises.."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#ff2625",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#ff2625", // Keep the same background color on hover
            },
            fontSize: { xs: "12px", lg: "14px", md: "14px" },
          }}
          variant="contained"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchExcercises;
