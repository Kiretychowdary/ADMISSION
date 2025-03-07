import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileDown, Info, Globe2 } from 'lucide-react';

const AdmissionsInternational = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://vignan.ac.in/blog/images/thumb/welcome%20to%20international%20students.jpg')",
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white"
          >
            Apply Now - Admission 2025
          </motion.h1>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
          <div className="flex items-center space-x-2">
            <span>Home</span>
            <span>›</span>
            <span>Admission International</span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-700 text-white px-6 py-2 rounded-md flex items-center space-x-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Manual Application Form 2025</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-700 text-white px-6 py-2 rounded-md"
            >
              Students Categories
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-700 text-white px-6 py-2 rounded-md"
            >
              Study In India
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-700 text-white px-6 py-2 rounded-md flex items-center space-x-2"
            >
              <Info className="w-4 h-4" />
              <span>FAQs</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* NRI/PIO/OCI Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-amber-100 rounded-lg p-6">
            <div className="flex justify-between items-center">
              <button className="bg-amber-500 text-white px-6 py-3 rounded-md font-semibold">
                NRI / PIO / OCI
              </button>
              <div className="flex-1 ml-6">
                <div className="bg-white rounded-md p-4">
                  <p className="text-gray-700">
                    Avail 50% Fee Waiver with SAT or with Score of 70% above in HSC grades 
                    <a href="#" className="text-blue-600 hover:text-blue-800 ml-2">Click Here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Foreign Students Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-emerald-100 rounded-lg p-6">
            <div className="flex justify-between items-center">
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-md font-semibold">
                Foreign
              </button>
              <div className="flex-1 ml-6">
                <div className="bg-white rounded-md p-4">
                  <p className="text-gray-700">
                    Avail 50% fee waiver for Africa, Asia and SAARC 
                    <a href="#" className="text-blue-600 hover:text-blue-800 ml-2">Click Here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Virtual Tour Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://vignan.ac.in/blog/images/august-21/university2.jpg"
              alt="Campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
  <h2 className="text-4xl font-bold mb-4">Experience Our Campus In 360° Virtual Tour</h2>
  <p className="text-lg mb-8">A thriving community of creative and accomplished people from around the world.</p>
  <motion.a
    href="https://www.easytourz.com/BT-EmabedTour/all/a0ccdb54f97e5369"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    className="bg-amber-500 text-white px-8 py-3 rounded-full flex items-center space-x-2"
  >
    <Globe2 className="w-5 h-5" />
    <span>Virtual Tour 360°</span>
  </motion.a>
</div>

          </div>
        </motion.div>

        {/* Public Advisory */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Public Advisory</h2>
          <p className="text-center mb-8">
            Vignan University works closely with leading universities around the world to offer an affordable way of getting an internationally recognised qualification.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">
              No Intermediaries
            </button>
            <button className="border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">
              Fake Website
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionsInternational;