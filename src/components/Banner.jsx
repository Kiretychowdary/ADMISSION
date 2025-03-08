import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Banner.css';
const Banner = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: ''
  });

  const departments = [
    "Mathematics",
    "Food Technology",
    "Advanced  Computer Science Engineering",
    "Computer Science and Engineering",
    "Electrical and Electronics Engineering",
    "Electronics and Communication Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biotechnology",
    "Biomedical Engineering",
    "Management Studies",
    "Pharmacy",
    "Agricultural Engineering",
    "Agricultural and Horticultural Sciences",
    "Law",
    "Information Technology",
    "English and Foreign Languages",
    "Social sciences and Humanities",
    "Textile Technology"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('selectedDepartment', formData.department);
    navigate('/departments');
  };

  return (
    <div className="banner-container">
      <div className="banner-overlay">
        <div className="content-container">
          <div className="text-section">
            <h1 className="typing-text">Join Our University</h1>
            <p className="subtext">Apply now and be a part of an amazing academic journey!</p>
          </div>
          <div className="form-container">
            <h2 className="title">Apply Now for Admission</h2>
            <form className="form" onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text" name="name" className="input" value={formData.name} onChange={handleChange} required />

              <label>Email:</label>
              <input type="email" name="email" className="input" value={formData.email} onChange={handleChange} required />

              <label>Phone:</label>
              <input type="tel" name="phone" className="input" value={formData.phone} onChange={handleChange} required />

              <label>Department:</label>
              <select name="department" className="input" value={formData.department} onChange={handleChange} required>
                <option value="">-- Select Department --</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </select>

              <button type="submit" className="submit">Submit Application</button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;