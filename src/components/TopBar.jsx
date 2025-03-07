import React from "react";
import "./TopBar.css";

function TopBar() {
    return (
        <div className="top-bar">
            <div className="top-bar-links">
                <a href="#international">INTERNATIONAL</a>
                <a href="#alumni">ALUMNI</a>
                <a href="#faculty">FACULTY</a>
                <a href="#schools">SCHOOLS</a>
                <a href="#campus-life">CAMPUS LIFE</a>
            </div>
            <button className="admissions">
                Admissions 2025 <span className="cursor-pointer">➜</span>
            </button>
        </div>
    );
}

export default TopBar;
