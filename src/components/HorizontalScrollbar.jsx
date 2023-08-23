import React, { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import BodyPart from "./BodyPart";
import { Stack, Box, Button } from "@mui/material";
import LeftImg from "../assets/icons/left-arrow.png";
import RightImg from "../assets/icons/right-arrow.png";

const HorizontalScrollbar = ({ bodyParts }) => {
  const itemsToShow = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(bodyParts.length / itemsToShow);

  function goToPage(page) {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  }

  const visibleExcercises = bodyParts.slice(
    currentPage * itemsToShow,
    currentPage * itemsToShow + itemsToShow
  );

  return (
    <div>
      <ScrollMenu>
        {visibleExcercises.map((item, index) => {
          return (
            <Box key={index} sx={{ margin: "10px 120px" }}>
              <BodyPart item={item} />
            </Box>
          );
        })}
      </ScrollMenu>
      <Stack direction={"row"} sx={{ justifyContent: "end" }}>
        <Button onClick={() => goToPage(currentPage - 1)}>
          <img src={LeftImg} alt="left-btn" />
        </Button>
        <Button onClick={() => goToPage(currentPage + 1)}>
          <img src={RightImg} alt="right-btn" />
        </Button>
      </Stack>
    </div>
  );
};

export default HorizontalScrollbar;
