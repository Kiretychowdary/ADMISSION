import React from "react";
import './styles/Campuses.css';
import Ablock from "./Ablock.jpg";
import Hyd from "./HydVignan.avif";
const Campuses = () => {
  return (
    <div className="campuses-container">
      {/* Heading on the top left */}
      <h2 className="campuses-heading">Campuses</h2>

      {/* Images next to the heading in the middle */}
      <div className="campuses-content">
        <div className="campuses-grid">
          <figure>
            <img src={Ablock} alt="Hyderabad Campus" className="campus-image" />
            <figcaption>Vadlamudi</figcaption>
          </figure>
          <figure>
            <img src={Hyd} alt="Campus 2" className="campus-image" />
            <figcaption>Hyderabad</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Campuses;
