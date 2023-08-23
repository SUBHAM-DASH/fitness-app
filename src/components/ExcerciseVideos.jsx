import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ExcerciseVideos = ({ excerciseVideos, name }) => {
  if (excerciseVideos.length === 0) return <h2 style={{textAlign:'center'}}>"Loading..."</h2>;

  return (
    <Box>
      <Typography sx={{ fontWeight: 700, fontSize: "26px", margin: "5%" }}>
        Watch{" "}
        <span style={{ textTransform: "capitalize", color: "#ff2625" }}>
          {name}
        </span>{" "}
        Excercise Videos
      </Typography>
      <Box
        spacing={6}
        sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
      >
        {excerciseVideos.slice(0, 3).map((item, index) => {
          return (
            <Box key={index} sx={{ margin: "auto" }}>
              <a
                style={{ textDecoration: "none" }}
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  style={{ borderRadius: "20px" }}
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  width={340}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "#ff2625", fontWeight: 700 }}
                  >
                    {item.video.title.length > 30
                      ? item.video.title.substr(0, 30)
                      : item.video.title}
                  </Typography>
                  <Typography sx={{ color: "#000" }}>
                    {item.video.channelName.length > 30
                      ? item.video.channelName.substr(0, 30)
                      : item.video.channelName}
                  </Typography>
                </Box>
              </a>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ExcerciseVideos;
