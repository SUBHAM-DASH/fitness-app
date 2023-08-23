import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Card, Typography, Button } from "@mui/material";
import "../css/ExcerciseCard.styles.css";

const ExcerciseCard = ({ excerciseItem }) => {
  return (
    <Link
      to={`/excercise/${excerciseItem.id}`}
      style={{ textDecoration: "none" }}
    >
      <Card className="excercise-card">
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
        <Typography sx={{ fontWeight: "700", fontSize: "20px",textTransform:'capitalize',margin:'20px' }}>
          {excerciseItem.name.slice(0,35)}...
        </Typography>
      </Card>
    </Link>
  );
};

export default ExcerciseCard;
