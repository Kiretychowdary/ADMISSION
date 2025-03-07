import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const ProgramSection = ({ title, image, programs }: { title: string, image: string, programs: Array<{ name: string, type: 'apply' | 'know' | 'launching' }> }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="space-y-2">
        <div className="flex items-center text-sm text-blue-600 mb-4">
          → Program | Fees | Eligibility | Criteria
        </div>
        {programs.map((program, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
            <span className="text-gray-800">{program.name}</span>
            <div className="flex items-center">
              {program.type === 'apply' && (
                <>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded mr-2">NEW</span>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Apply Now
                  </button>
                </>
              )}
              {program.type === 'know' && (
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                  Know More
                </button>
              )}
              {program.type === 'launching' && (
                <button className="bg-gray-500 text-white px-4 py-2 rounded">
                  Launching Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AdmissionsIndia = () => {
  const sections = [
    {
      title: "Engineering & Technology",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      programs: [
        { name: "B.Tech / M.Tech (Integrated)", type: "apply" },
        { name: "M.Tech", type: "apply" },
        { name: "B.Arch / B.Design", type: "apply" },
        { name: "M.Tech (Flexible Timing)", type: "apply" },
        { name: "B.Tech (Post Completion of Diploma)", type: "apply" },
        { name: "Advanced PG Diploma", type: "launching" }
      ]
    },
    {
      title: "Medicine & Health Sciences",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      programs: [
        { name: "Health Science UG", type: "apply" },
        { name: "Health Science PG", type: "apply" },
        { name: "MBBS Admissions", type: "apply" },
        { name: "BDS Admissions", type: "apply" },
        { name: "MD/MS Admission", type: "know" }
      ]
    },
    {
      title: "Management",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      programs: [
        { name: "BBA", type: "apply" },
        { name: "MBA", type: "apply" }
      ]
    },
    {
      title: "Science & Humanities",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      programs: [
        { name: "Under Graduate (UG) - B.A., B.Sc., B.Ed, Bs, B.Com, BCA & Diploma", type: "apply" },
        { name: "Post Graduate (PG) - M.A., M.Com, M.Sc., M.C.A., and M.S.W.", type: "apply" }
      ]
    },
    {
      title: "Hotel & Catering Management",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      programs: [
        { name: "Under Graduate (UG)", type: "apply" },
        { name: "Post Graduate Diploma", type: "apply" }
      ]
    },
    {
      title: "Agricultural Sciences",
      image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      programs: [
        { name: "All Programs", type: "apply" }
      ]
    },
    {
      title: "Law",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      programs: [
        { name: "5 Year Integrated Law Courses", type: "apply" },
        { name: "LL.B (UG)", type: "apply" },
        { name: "LL.M (PG)", type: "apply" },
        { name: "Certificate/Diploma programs", type: "apply" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://vignan.ac.in/images-webp/slidernew2.webp')",
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
            Admission India
          </motion.h1>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
          <div className="flex items-center space-x-2">
            <span>Home</span>
            <span>›</span>
            <span>Admission India</span>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProgramSection {...section} />
            </motion.div>
          ))}
        </div>

        {/* Public Advisory Section */}
        <div className="mt-16 bg-blue-700 text-white p-8 rounded-lg">
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
        </div>
      </div>
    </div>
  );
};

export default AdmissionsIndia;