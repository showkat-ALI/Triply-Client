import React from "react";
import About from "../About/About";
import TopBanner from "../Banner/TopBanner";
import Destinations from "../Destinations/Destinations";
import Whyus from "../Whyus/Whyus";
// Home buid

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Destinations></Destinations>
      <Whyus></Whyus>
      <About></About>
    </div>
  );
};

export default Home;
