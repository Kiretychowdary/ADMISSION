import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import ApplicationProcess from "./components/ApplicationProcess";
import Banner from "./components/Banner";
import Placements from "./components/Placements.jsx";
import Containers from "./components/Containers.jsx";
import Achievements from "./components/Achievements.jsx";
import Branches from "./components/Branches.jsx";
import Rankings from "./components/Rankings.jsx";
// import VirtualTour from "./components/VirtualTour.jsx";
import "./App.css";
import VirtualTour from "./components/VitrualTour.jsx";

function App() {
    return (
        <div className="app-container">
            <TopBar />
            <Header />
            <Banner />
            <Containers />
            
            <ApplicationProcess />
            <Rankings/>
            <Achievements />
            <Placements />
            <VirtualTour/>
            <Branches />
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