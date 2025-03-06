import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import ApplicationProcess from "./components/ApplicationProcess";
import Banner from "./components/Banner";
import Placements from "./components/Placements.jsx";
import Containers from "./components/Containers.jsx";
import Achievements from "./components/Achievements.jsx";
import Branches from "./components/Branches.jsx";

import "./App.css";

function App() {
    return (
        <div className="app-container">
            <TopBar />
            <Header />
            <Banner />
            <Containers />

            {/* About Us Section */}
            {/* <section className="about-us">
                <div className="about-us-content">
                    <h2>About Us</h2>
                    <p>
                        Vignan University is a premier institution dedicated to providing quality education and fostering innovation.
                        Our mission is to empower students with the knowledge and skills needed to excel in their chosen fields.
                    </p>
                    <button className="learn-more">Learn More</button>
                </div>
            </section> */}

            {/* Programs Section */}
            {/* <section className="programs">
                <h2>Our Programs</h2>
                <div className="programs-grid">
                    <div className="program-card">
                        <h3>Artificial Intelligence</h3>
                        <p>Explore the cutting-edge field of AI and machine learning with our comprehensive programs.</p>
                    </div>
                    <div className="program-card">
                        <h3>Computer Science</h3>
                        <p>Gain expertise in software development, algorithms, and data structures.</p>
                    </div>
                    <div className="program-card">
                        <h3>Business Administration</h3>
                        <p>Develop leadership and management skills to excel in the business world.</p>
                    </div>
                </div>
            </section> */}
        
            <Branches />
            <ApplicationProcess />
            <Achievements />
            <Placements />
            
           
            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2025 Vignan University. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#privacy-policy">Privacy Policy</a>
                        <a href="#terms-of-service">Terms of Service</a>
                        <a href="#contact-us">Contact Us</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;