import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExcersiseDetail from "./pages/ExcersiseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Box sx={{ width: { xl: "1488px" } }} m={"auto"}>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/excercise/:id" element={<ExcersiseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
