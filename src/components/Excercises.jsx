import React, { useContext, useState } from "react";
import { Typography, Box, Stack, Grid, Pagination } from "@mui/material";
import { ExcerciseContext } from "../context/ExcerciseContext";
import ExcerciseCard from "./ExcerciseCard";

const Excercises = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const { excercise, setExcercise } = useContext(ExcerciseContext);

  const excercisesPerPage = 9;

  const indexOflastExcercise = currentPage * excercisesPerPage;

  const indexOffirstExcercise = indexOflastExcercise - excercisesPerPage;

  const currentExcercises = excercise.slice(indexOffirstExcercise,indexOflastExcercise);

  const paginate = (e, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box sx={{ margin: "50px 20px" }}>
      <Typography variant="h5" fontWeight="700">
        Showing Result
      </Typography>
      <Grid container spacing={5}>
        {excercise.length > 0 &&
          currentExcercises.map((excerciseItem, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                <ExcerciseCard excerciseItem={excerciseItem} />
              </Grid>
            );
          })}
      </Grid>
      <Box sx={{display:'flex',justifyContent:'center',margin:'30px 0px'}}>
        {excercise.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excercise.length / excercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Box>
    </Box>
  );
};

export default Excercises;
