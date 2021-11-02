import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Spot from "../spots/Spot";
import "./Destinations.css";
// Destination build
const Destinations = () => {
  const [destination, setDestinaion] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-tundra-67340.herokuapp.com/destinations")
      .then((res) => res.json())
      .then((data) => setDestinaion(data));
  }, []);
  if (destination.length === 0) {
    return (
      <Spinner className="text-center" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <div className="set-wave-bg">
        <div className="container my-5">
          <h1 className="text-center my-5">Tourist Spot that we provide </h1>

          <div className="destinations all-destinations">
            {destination.map((spot) => (
              <Spot spot={spot} key={spot._id}></Spot>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
