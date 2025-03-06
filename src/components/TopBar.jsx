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
                <a href="#admissions">ADMISSIONS</a>
                <a href="#amrita">AMRITA</a>
                <a href="#news">NEWS</a>
                <a href="#blog">BLOG</a>
                <a href="#events">EVENTS</a>
                <a href="#jobs">JOBS</a>
                <a href="#contact">CONTACT</a>
            </div>
            <button className="admissions">ADMISSIONS</button>
        </div>
    );
}

export default TopBar;