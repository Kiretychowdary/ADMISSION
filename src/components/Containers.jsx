import React from "react";
import '../styles/Containers.css';

function Containers() {
  // Define the URLs for the buttons
  const indiaAdmissionsUrl = "https://example.com/india-admissions"; // Replace with the actual URL
  const internationalAdmissionsUrl = "https://example.com/international-admissions"; // Replace with the actual URL

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
            <h2>National</h2>
            <a href={indiaAdmissionsUrl} target="_blank" rel="noopener noreferrer">
              <button className="apply-button">Apply Now</button>
            </a>
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
            <h2>International</h2>
            <a href={internationalAdmissionsUrl} target="_blank" rel="noopener noreferrer">
              <button className="apply-button">Apply Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Containers;