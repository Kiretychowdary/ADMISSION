import React, { useState } from 'react';
import { 
  GraduationCap, Award, Users, MapPin, ChartBar, 
  Target, Trophy, Building, ChevronDown, ChevronUp, 
  Globe, Briefcase
} from 'lucide-react';
import '../styles/National.css';

function InternationDashboard() {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const toggleProgram = (index) => {
    if (expandedProgram === index) {
      setExpandedProgram(null);
    } else {
      setExpandedProgram(index);
    }
  };

  const programs = [
    {
      title: "Computer Science & Engineering",
      description: "Cutting-edge curriculum covering software development, AI, machine learning, and more."
    },
    {
      title: "Business Administration",
      description: "Comprehensive program focusing on management, finance, marketing, and entrepreneurship."
    },
    {
      title: "Mechanical Engineering",
      description: "Advanced studies in design, manufacturing, thermodynamics, and mechanical systems."
    },
    {
      title: "Life Sciences",
      description: "Research-oriented program exploring biotechnology, genetics, and environmental science."
    }
  ];

  const achievements = [
    { icon: <Trophy className="w-12 h-12 text-yellow-500" />, value: "Top 1%", label: "In Global Rankings" },
    { icon: <Building className="w-12 h-12 text-blue-500" />, value: "50+", label: "Research Centers" },
    { icon: <ChartBar className="w-12 h-12 text-green-500" />, value: "95%", label: "Employment Rate" },
    { icon: <Target className="w-12 h-12 text-red-500" />, value: "200+", label: "Industry Partners" }
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Vignan University Dashboard</h1>
        <p>Monitoring academic excellence and institutional growth</p>
      </header>

      {/* Stats Overview */}
      <section className="stats-overview">
        <h2>University Overview</h2>
        <div className="stats-grid">
          {achievements.map((achievement, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{achievement.icon}</div>
              <h3 className="stat-value">{achievement.value}</h3>
              <p className="stat-label">{achievement.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Highlights */}
      <section className="features-section">
        <h2>Key Highlights</h2>
        <div className="features-grid">
          <div className="feature-card">
            <GraduationCap className="feature-icon" />
            <h3>100+ Programs</h3>
            <p>Wide range of undergraduate and graduate programs across multiple disciplines</p>
          </div>
          <div className="feature-card">
            <Award className="feature-icon" />
            <h3>Accredited Excellence</h3>
            <p>Internationally recognized degrees and world-class faculty</p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>Global Community</h3>
            <p>Diverse student body from over 50 countries</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <h2>Academic Programs</h2>
        <div className="programs-accordion">
          {programs.map((program, index) => (
            <div className="program-item" key={index}>
              <div 
                className="program-header" 
                onClick={() => toggleProgram(index)}
              >
                <h3>{program.title}</h3>
                {expandedProgram === index ? 
                  <ChevronUp className="program-icon" /> : 
                  <ChevronDown className="program-icon" />
                }
              </div>
              {expandedProgram === index && (
                <div className="program-content">
                  <p>{program.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Global Partnerships */}
      <section className="partnerships-section">
        <h2>Global Partnerships</h2>
        <div className="partnerships-content">
          <div className="partnerships-image">
            <img 
              src="/api/placeholder/500/300" 
              alt="Global Partners" 
            />
          </div>
          <div className="partnerships-details">
            <div className="partnership-item">
              <Globe className="partnership-icon" />
              <div>
                <h3>Exchange Programs</h3>
                <p>Study abroad opportunities with 50+ partner universities worldwide</p>
              </div>
            </div>
            <div className="partnership-item">
              <Briefcase className="partnership-icon" />
              <div>
                <h3>Industry Connections</h3>
                <p>Partnerships with leading global companies for internships and placements</p>
              </div>
            </div>
            <div className="partnership-item">
              <Award className="partnership-icon" />
              <div>
                <h3>Dual Degree Programs</h3>
                <p>Earn degrees from multiple prestigious institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="career-section">
        <h2>Career Prospects</h2>
        <div className="career-grid">
          <div className="career-card career-blue">
            <h3>Career Services</h3>
            <ul>
              <li>
                <ChartBar className="career-icon" />
                Personal Career Counseling
              </li>
              <li>
                <ChartBar className="career-icon" />
                Resume Building Workshops
              </li>
              <li>
                <ChartBar className="career-icon" />
                Interview Preparation
              </li>
            </ul>
          </div>
          <div className="career-card career-green">
            <h3>Industry Partners</h3>
            <ul>
              <li>
                <Building className="career-icon" />
                Fortune 500 Companies
              </li>
              <li>
                <Building className="career-icon" />
                Tech Giants
              </li>
              <li>
                <Building className="career-icon" />
                Research Institutions
              </li>
            </ul>
          </div>
          <div className="career-card career-purple">
            <h3>Alumni Network</h3>
            <ul>
              <li>
                <Users className="career-icon" />
                Global Alumni Community
              </li>
              <li>
                <Users className="career-icon" />
                Mentorship Programs
              </li>
              <li>
                <Users className="career-icon" />
                Networking Events
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-section">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <div className="contact-item">
            <MapPin className="contact-icon" />
            <p>123 University Ave, City, Country</p>
          </div>
          <div className="contact-item">
            <a href="mailto:admissions@vignan.edu" className="contact-link">
              admissions@vignan.edu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InternationDashboard;