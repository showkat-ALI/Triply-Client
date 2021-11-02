import React from "react";
import aboutimg from "../../images/about_image-1.1 (1).png";
import "./about.css";
const About = () => {
  // about page build
  return (
    <div>
      <h1 className="text-center">About us</h1>
      <div className="container aboutContainer">
        <div className="aboutimg" >
          <img className="container-fluide" src={aboutimg} alt="" />
        </div>
        <div className="mt-5">
          <h1>We Help You Planning Your Journey</h1>
          <p>
            Triply, the world's largest travel platform*, helps 463 million
            travelers each month** make every trip their best trip. Travelers
            across the globe use the Triply site and app to browse more than 859
            million reviews and opinions of 8.6 million accommodations,
            restaurants, experiences, airlines and cruises. Whether planning or
            on a trip, travelers turn to Triply to compare low prices on hotels,
            flights and cruises, book popular tours and attractions, as well as
            reserve tables at great restaurants. Triply, the ultimate travel
            companion, is available in 49 markets and 28 languages.
          </p>
          <button className="btn btn-success">Visite for more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
