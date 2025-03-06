import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
    const [text, setText] = useState('');
    const fullText = 'Welcome to Vignan University';
    const speed = 100; // Typing speed in milliseconds

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(prev => (index < fullText.length ? prev + fullText[index] : prev));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner-container">
            <img
                src="https://vignan.ac.in/newvignan/assets/images/building_character.jpg"
                alt="Vignan University"
                className="banner-image"
            />
            <div className="banner-text left-align">
                <h1>{text}</h1>
                <p>Your Gateway to Excellence in Education</p>
            </div>
        </div>
    );
};

export default Banner;