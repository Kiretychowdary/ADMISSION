import React, { useState } from 'react';
import '../styles/NewAdmissionForm.css';

const departments = [
  "Mathematics",
  "Food Technology",
  "Advanced Computer Science Engineering",
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
  "Social Sciences and Humanities",
  "Textile Technology"
];

const NewAdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    marks10: '',
    marks12: '',
    vsatRank: '',
    priority1: '',
    priority2: '',
    priority3: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Application Submitted Successfully!');
  };

  return (
    <div className="form-container">
      <h2>New Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name *</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone *</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>10th Marks (%) *</label>
        <input type="number" name="marks10" value={formData.marks10} onChange={handleChange} required />

        <label>Inter/12th Marks (%) *</label>
        <input type="number" name="marks12" value={formData.marks12} onChange={handleChange} required />

        <label>VSAT Rank *</label>
        <input type="text" name="vsatRank" value={formData.vsatRank} onChange={handleChange} required />

        <label>Priority 1 *</label>
        <select name="priority1" value={formData.priority1} onChange={handleChange} required>
          <option value="" disabled>Select Department</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>

        <label>Priority 2 (Optional)</label>
        <select name="priority2" value={formData.priority2} onChange={handleChange}>
          <option value="" disabled>Select Department</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>

        <label>Priority 3 (Optional)</label>
        <select name="priority3" value={formData.priority3} onChange={handleChange}>
          <option value="" disabled>Select Department</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default NewAdmissionForm;
