import React, { useEffect, useState } from 'react';
import './styles/Banner.css';

const Banner = () => {
    const [text, setText] = useState('');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const fullText = ' to Vignan University';
    const speed = 100;

    useEffect(() => {
        let index = 0;
        setText(''); // Reset text to empty string
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.password || !formData.confirmPassword) {
            alert('Please fill out all required fields.');
            return;
        }
        console.log('Form Data Submitted:', formData);
        setFormData({ firstname: '', lastname: '', email: '', password: '', confirmPassword: '' });
    };

    return (
        <div className="banner-container">
            <div className="banner-overlay">
                <div className="content-container">
                    <div className="text-section">
                        <h1 className="typing-text">{text}</h1>
                        <p className="subtext">Your Gateway to Excellence in Education</p>
                    </div>
                    <div className="form-container">
                        <form className="form" onSubmit={handleSubmit}>
                            <p className="title">Register</p>
                            <p className="message">Signup now and get full access to our app.</p>
                            <div className="flex">
                                <label>
                                    <input required type="text" className="input" value={formData.firstname} onChange={handleInputChange} id="firstname" placeholder="Firstname" />
                                </label>
                                <label>
                                    <input required type="text" className="input" value={formData.lastname} onChange={handleInputChange} id="lastname" placeholder="Lastname" />
                                </label>
                            </div>
                            <label>
                                <input required type="email" className="input" value={formData.email} onChange={handleInputChange} id="email" placeholder="Email" />
                            </label>
                            <label>
                                <input required type="password" className="input" value={formData.password} onChange={handleInputChange} id="password" placeholder="Password" />
                            </label>
                            <label>
                                <input required type="password" className="input" value={formData.confirmPassword} onChange={handleInputChange} id="confirmPassword" placeholder="Confirm password" />
                            </label>
                            <button type="submit" className="submit">Submit</button>
                            <p className="signin">Already have an account? <a href="#">Signin</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;