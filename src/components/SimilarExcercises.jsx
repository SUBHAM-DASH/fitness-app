import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Stack,
  Pagination,
  Card,
  Button,
} from "@mui/material";

import "../css/SimilarExcrcise.styles.css";

const SimilarExcercises = ({ exerciseMuscelData, equipmentExerciseData }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [currentPageval, setcurrentPageval] = useState(1);

  const excercisesPerPage = 3;
  const end = currentPage * excercisesPerPage;
  const start = end - excercisesPerPage;

  const muselExercises = exerciseMuscelData.slice(start, end);

  const end1 = currentPageval * excercisesPerPage;
  const start1 = end1 - excercisesPerPage;
  const equipmentExcercise = equipmentExerciseData.slice(start1, end1);


  const paginate = (e, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const paginate2 = (e, value) => {
    setcurrentPageval(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box>
      <Box sx={{ margin: "3% 0px" }}>
        <Typography
          sx={{ fontWeight: "700", fontSize: "25px", marginLeft: "4%" }}
        >
          Exercises That Target The{" "}
          <span style={{ color: "#ff2625" }}>Same Muscel</span> Group
        </Typography>
        <Grid container>
          {muselExercises &&
            muselExercises.map((excerciseItem, index) => {
              return (
                <Grid
                  sx={{ margin: { sm: "auto", xs: "auto" } }}
                  item
                  key={index}
                  xs={10}
                  sm={6}
                  md={4}
                  lg={4}
                >
                  <Card
                    sx={{
                      margin: "30px 30px",
                      textAlign: "center",
                      borderRadius: "20px",
                      justifyContent: "center",
                    }}
                    className="popup-card"
                  >
                    <img src={excerciseItem.gifUrl} alt={excerciseItem.name} />
                    <Stack direction={"row"} m={"10px 0px"}>
                      <Button
                        sx={{
                          color: "#fff",
                          backgroundColor: "#ffa9a9",
                          fontSize: "14px",
                          borderRadius: "20px",
                          textTransform: "capitalize",
                          margin: "15px",
                        }}
                      >
                        {excerciseItem.bodyPart}
                      </Button>
                      <Button
                        sx={{
                          color: "#fff",
                          backgroundColor: "#ffc757",
                          fontSize: "14px",
                          borderRadius: "20px",
                          textTransform: "capitalize",
                          margin: "15px",
                        }}
                      >
                        {excerciseItem.target}
                      </Button>
                    </Stack>
                    <Typography sx={{textTransform:'capitalize',fontWeight:'600',fontSize:'16px',margin:'15px 0px'}}>
                      {excerciseItem.name
                        ? excerciseItem.name.slice(0, 30)
                        : ""}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "30px 0px" }}
        >
          {exerciseMuscelData.length > 3 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exerciseMuscelData.length / excercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ fontWeight: "700", fontSize: "25px", marginLeft: "4%" }}
        >
          Exercises The Use Of{" "}
          <span style={{ color: "#ff2625" }}>Same Equipment</span>
        </Typography>
        <Grid container>
          {equipmentExcercise &&
            equipmentExcercise.map((excerciseItem, index) => {
              return (
                <Grid
                  sx={{ margin: { sm: "auto", xs: "auto" } }}
                  item
                  key={index}
                  xs={10}
                  sm={6}
                  md={4}
                  lg={4}
                >
                  <Card
                    sx={{
                      margin: "30px 30px",
                      textAlign: "center",
                      borderRadius: "20px",
                      justifyContent: "center",
                    }}
                    className="popup-card"
                  >
                    <img src={excerciseItem.gifUrl} alt={excerciseItem.name} />
                    <Stack direction={"row"} m={"10px 0px"}>
                      <Button
                        sx={{
                          color: "#fff",
                          backgroundColor: "#ffa9a9",
                          fontSize: "14px",
                          borderRadius: "20px",
                          textTransform: "capitalize",
                          margin: "15px",
                        }}
                      >
                        {excerciseItem.bodyPart}
                      </Button>
                      <Button
                        sx={{
                          color: "#fff",
                          backgroundColor: "#ffc757",
                          fontSize: "14px",
                          borderRadius: "20px",
                          textTransform: "capitalize",
                          margin: "15px",
                        }}
                      >
                        {excerciseItem.target}
                      </Button>
                    </Stack>
                    <Typography sx={{textTransform:'capitalize',fontWeight:'600',fontSize:'16px',margin:'15px 0px'}}>
                      {excerciseItem.name
                        ? excerciseItem.name.slice(0, 30)
                        : ""}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "30px 0px" }}
        >
          {equipmentExerciseData.length > 3 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(
                equipmentExerciseData.length / excercisesPerPage
              )}
              page={currentPageval}
              onChange={paginate2}
              size="large"
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SimilarExcercises;
