import React from "react";
import { Carousel } from "react-bootstrap";
import "./banner.css";
import Zoom from "react-reveal/Zoom";

import banner1 from "../../images/home4_image-4.jpg";
import banner2 from "../../images/home4_image-5.jpg";
import banner3 from "../../images/h2_bg.jpg";
// top banner build

const TopBanner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Zoom>
            <img
              className="banner-img d-block w-100"
              src={banner1}
              alt="First slide"
            />
          </Zoom>
          <Carousel.Caption>
            <h1>Enjoy your stay</h1>
            <p>Discover amazing places at exclusive deals</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Zoom>
            <img
              className="banner-img d-block w-100"
              src={banner2}
              alt="Second slide"
            />
          </Zoom>

          <Carousel.Caption>
            <h1>Enjoy your stay</h1>
            <p>Discover amazing places at exclusive deals</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Zoom>
            <img
              className="banner-img d-block w-100"
              src={banner3}
              alt="Third slide"
            />
          </Zoom>
          <Carousel.Caption>
            <h1>Enjoy your stay</h1>
            <p>Discover amazing places at exclusive deals</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default TopBanner;
