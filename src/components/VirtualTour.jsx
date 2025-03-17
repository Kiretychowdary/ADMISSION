import React from 'react';
import { Move3D } from 'lucide-react';

const styles = {
  virtualTour: {
    position: 'relative',
    width: '100%',
    height: '600px',
    overflow: 'hidden'
  },
  background: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))'
  },
  content: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 1rem'
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '50%',
    padding: '1.5rem',
    marginBottom: '2rem'
  },
  icon: {
    color: '#1f2937'
  },
  heading: {
    fontFamily: 'serif',
    fontSize: window.innerWidth >= 768 ? '3rem' : '2.5rem',
    color: 'white',
    marginBottom: '1.5rem',
    maxWidth: '800px'
  },
  description: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '2rem',
    maxWidth: '32rem'
  },
  button: {
    backgroundColor: '#eab308',
    color: '#111827',
    fontWeight: 600,
    padding: '0.75rem 2rem',
    borderRadius: '0.375rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: 'none',
    cursor: 'pointer',
 
    transition: 'background-color 0.2s',
    textDecoration: 'none' // Ensures the link appears as a styled button
  
    transition: 'background-color 0.2s'
 
  },
  buttonArrow: {
    display: 'inline-block'
  }
};

const VirtualTour = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.virtualTour}>
      {/* Background Image */}
      <div style={styles.background} />
      
      {/* Overlay with slight dark gradient */}
      <div style={styles.overlay} />

      {/* Content Container */}
      <div style={styles.content}>
        {/* 360 Icon Circle */}
        <div style={styles.iconContainer}>
          <Move3D size={48} style={styles.icon} />
        </div>

        {/* Heading */}
        <h2 style={styles.heading}>
          Experience Our Campus In 360° Virtual Tour
        </h2>

        {/* Description */}
        <p style={styles.description}>
          A thriving community of creative and accomplished people from around the world.
        </p>

 
        {/* SBIT Virtual Tour Button */}
        <a 
          href="https://www.easytourz.com/BT-EmabedTour/all/a0ccdb54f97e5369" 
          target="_blank" 
          rel="noopener noreferrer"
 
        {/* CTA Button */}
        <button 
 
          style={{
            ...styles.button,
            backgroundColor: isHovered ? '#fbbf24' : '#eab308'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
 
          VIGNAN Virtual Tour
          <span style={styles.buttonArrow}>→</span>
        </a>
 
          Virtual Tour 360
          <span style={styles.buttonArrow}>→</span>
        </button>
 
      </div>
    </div>
  );
};

 
export default VirtualTour;
=======
export default VirtualTour;
 
