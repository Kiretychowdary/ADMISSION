import React from 'react';
import '../styles/Achievements.css';

function Achievements() {
  return (
    <div className="achievements">
      <h2>Our Achievements</h2>
      <div className="achievements-grid">
        <div className="achievement-box">
          <h2>44 LPA</h2> 
          <h3>Highest Package</h3>
        </div>
        <div className="achievement-box">
          <h2>Over 4000+</h2>
          <h3>Number of Admissions Last Year</h3>
        </div>
        <div className="achievement-box">
          <h2> 85% </h2>
          <h3>Placements</h3>
        </div>
        <div className="achievement-box">
          <h2>6 LPA</h2>
          <h3>Average Package</h3>
        </div>
        <div className="achievement-box">
          <h2>₹16 Crore </h2>
          <h3>Merit Scholarships</h3>
        </div>
        <div className="achievement-box">
          {/* <h2>10+ Universities </h2> */}
          <img src="data:image/png;base64,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" alt="ABET" />
          <h3>Foreign Collaborations</h3>
        </div>
      </div>
    </div>
  );
}

export default Achievements;