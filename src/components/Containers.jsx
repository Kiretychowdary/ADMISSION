import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Containers.css';

function Containers() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="containers">
      <div className="container">
        <div className="image-overlay">
          <img
            src="https://vignan.ac.in/newvignan/assets/whychooseImages/whychooseImage9.jpg"
            alt="Admissions India"
            className="container-image"
          />
          <div className="overlay-text">
            <h2>National</h2>
            <button 
              className="apply-button" 
              onClick={() => handleNavigation('/national-admissions')}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="image-overlay">
          <img
            src="https://vignan.ac.in/newvignan/assets/whychooseImages/whychooseImage3.jpg"
            alt="Admissions International"
            className="container-image"
          />
          <div className="overlay-text">
            <h2>International</h2>
            <button 
              className="apply-button" 
              onClick={() => handleNavigation('/international-dashboard')}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Containers;
