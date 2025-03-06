import React from "react";
import "./Containers.css"; // Ensure this CSS file is correctly named and imported

function Containers() {
  return (
    <div className="containers">
      {/* Container 1 */}
      <div className="container">
        <div className="image-overlay">
          <img
            src="https://vignan.ac.in/newvignan/assets/whychooseImages/whychooseImage9.jpg"
            alt="Admissions India"
            className="container-image"
          />
          <div className="overlay-text">
            <h2>Admissions India</h2>
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <div className="container">
        <div className="image-overlay">
          <img
            src="https://vignan.ac.in/newvignan/assets/whychooseImages/whychooseImage3.jpg"
            alt="Admissions International"
            className="container-image"
          />
          <div className="overlay-text">
            <h2>Admissions International</h2>
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Containers;