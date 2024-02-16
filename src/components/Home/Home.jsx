import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import MediaCard from "./HomeTop";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div className="Home">
      <MediaCard />
    </div>

  );
};

export default Home;
