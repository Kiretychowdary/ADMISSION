import React from 'react';
import { GraduationCap, Award, Users, MapPin, MessageSquare, Facebook, Twitter, Linkedin, Instagram, Globe, Briefcase, Trophy, Building, ChevronDown, ChevronUp, BarChart as ChartBar, Target, Book, Star } from 'lucide-react';
import '../styles/NationalDashboard.css'

function NationalDashboard() {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <a href="#" className="logo">Vignan</a>
          </div>
          <div className="navbar-right">
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">Admissions</a>
            <a href="#">Placements</a>
            <a href="#">Student Life</a>
            <a href="#">Contact</a>
            <button className="apply-btn">Apply Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Begin Your Journey at Vignan</h1>
          <p>Excellence in Education, Leadership in Innovation</p>
          <button className="hero-btn">Start Your Application</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose Vignan?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Star />
            <h3>NAAC A++ Grade</h3>
            <p>Highest accreditation for academic excellence</p>
          </div>
          <div className="feature-card">
            <Book />
            <h3>Modern Curriculum</h3>
            <p>Industry-aligned courses with practical exposure</p>
          </div>
          <div className="feature-card">
            <Briefcase />
            <h3>100% Placements</h3>
            <p>Excellent career opportunities with top companies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NationalDashboard;
