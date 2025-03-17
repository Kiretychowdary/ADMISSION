import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DepartmentCard.css'; // ✅ Importing CSS

const DepartmentCard = ({ dept, highlight }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (highlight && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [highlight]);

  // Function to handle Apply button click
  const handleApplyClick = () => {
    navigate('/new-admission-form', { state: { department: dept.name } });
  };

  return (
    <div ref={ref} className={`department-card ${highlight ? 'highlight' : ''}`}>
      <div className="card-header">
        <span className="department-badge">Department</span>
        {highlight && <span className="selected-badge">Selected Department</span>}
      </div>
      <h2>{dept.name}</h2>
      <p>{dept.description}</p>

      {dept.undergraduatePrograms.length > 0 && (
        <div>
          <h4>🎓 Undergraduate Programs:</h4>
          <ul>
            {dept.undergraduatePrograms.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}

      {dept.postgraduatePrograms.length > 0 && (
        <div>
          <h4>📚 Postgraduate Programs:</h4>
          <ul>
            {dept.postgraduatePrograms.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}

      {dept.phdPrograms.length > 0 && (
        <div>
          <h4>🔬 PhD Programs:</h4>
          <ul>
            {dept.phdPrograms.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}

      <button className="apply-btn" onClick={handleApplyClick}>Apply Now</button>
    </div>
  );
};

export default DepartmentCard;