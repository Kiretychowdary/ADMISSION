import React from "react";
import { motion } from "framer-motion";
import './styles/Branches.css';

// Branch data with images
const branches = [
  {
    name: "Vignan Guntur",
    location: "Guntur, Andhra Pradesh",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt65e4yiBXDiT_STvb6u-zchpUvnXiNu6D8U1m6bBIT6s6IVkKmXVT0kF5FFtLX21GUso&usqp=CAU", // Replace with actual image paths
  },
  {
    name: "Vignan Hyderabad",
    location: "Hyderabad, Telangana",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZXp47r9feXUWed3nCGaXCuhyWRJPTXGiLg&s",
  },
  {
    name: "Vignan Vizag",
    location: "Visakhapatnam, Andhra Pradesh",
    image: "https://vignan.ac.in/icetmsc24/img/vignan.jpg",
  },
  {
    name: "Vignan Duvvada",
    location: "Duvvada, Andhra Pradesh",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEON2-1PtkYjQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696566645657?e=2147483647&v=beta&t=I2kXTuBjXmuAtt3KtvewdovfRGKJ11kwHje0KIGtI00",
  },
];

const Branches = () => {
  return (
    <div className="branches-container">
      <h2 className="title">
        <span className="dot">🔵</span> OUR CAMPUSES
      </h2>
      <div className="branches-grid">
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            className="branch-card"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={branch.image} alt={branch.name} className="branch-image" />
            <div className="branch-info">
              <h3>{branch.name}</h3>
              <p>{branch.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
