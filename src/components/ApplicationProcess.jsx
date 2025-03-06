import React, { useState, useEffect, useRef } from 'react';
import './ApplicationProcess.css';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon from react-icons

const ApplicationProcess = () => {
    const steps = [
        { id: 1, title: "New User Registration", description: "Create an account to start your application." },
        { id: 2, title: "Sign in for Registered User", description: "Log in to continue your application." },
        { id: 3, title: "Filling Online Application Form", description: "Complete the application form with your details." },
        { id: 4, title: "Payment", description: "Pay the application fee securely online." },
        { id: 5, title: "Photo & Signature Upload", description: "Upload your photo and signature as per guidelines." },
        { id: 6, title: "Download filled-in Application", description: "Download and review your completed application." },
    ];

    const stepRefs = useRef([]); // Refs for each step
    const [visibleSteps, setVisibleSteps] = useState([]); // Track visible steps

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSteps((prev) => [...prev, entry.target.dataset.stepId]);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the step is visible
        );

        stepRefs.current.forEach((step) => {
            if (step) observer.observe(step);
        });

        return () => {
            stepRefs.current.forEach((step) => {
                if (step) observer.unobserve(step);
            });
        };
    }, []);

    return (
        <div className="application-process">
            <h2 className="section-title">Application Process</h2>
            <div className="process-steps">
                {steps.map((step) => (
                    <React.Fragment key={step.id}>
                        <div
                            ref={(el) => (stepRefs.current[step.id] = el)}
                            data-step-id={step.id}
                            className={`step ${visibleSteps.includes(step.id.toString()) ? "visible" : ""}`}
                        >
                            <div className="step-icon">{step.id}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                        {step.id < steps.length && (
                            <div className="arrow-icon">
                                <FaArrowRight />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ApplicationProcess;