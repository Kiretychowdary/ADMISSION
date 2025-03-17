import React from 'react';
import DepartmentCard from './DepartmentCard';


const departmentData = [
  {
    school: "School of Advanced Sciences and Languages",
    name: "Mathematics",
    description: "The Department of Mathematics equips students with strong analytical and problem-solving skills through training in pure and applied mathematics, statistics, and data science.",
    undergraduatePrograms: ["B.Sc in Mathematics, Statistics, Computer Science", "B.Sc in Actuarial Science"],
    postgraduatePrograms: ["B.Sc+M.Sc in Data Science"],
    phdPrograms: ["PhD in Mathematics", "PhD in Statistics"]
  },
  {
    school: "School of Computing",
    name: "Computer Science and Engineering",
    description: "Offers cutting-edge programs in AI, machine learning, cybersecurity, and software development to prepare students for the IT industry.",
    undergraduatePrograms: [
      "B.Tech in Computer Science and Engineering",
      
    ],
    postgraduatePrograms: ["M.Tech in Computer Science and Engineering"],
    phdPrograms: ["PhD in Computer Science and Engineering"]
  },
  {
    school: "School of Electrical and Electronics Engineering",
    name: "Electronics and Communication Engineering",
    description: "Focuses on communication systems, VLSI design, and signal processing.",
    undergraduatePrograms: [
      "B.Tech in Electronics and Communication Engineering",
      "B.Tech in VLSI Design and Technology"
    ],
    postgraduatePrograms: ["M.Tech in VLSI Design", "M.Tech in IoT"],
    phdPrograms: ["PhD in Electronics and Communication Engineering"]
  },
  {
    school: "School of Electrical and Electronics Engineering",
    name: "Electrical and Electronics Engineering",
    description: "Provides a strong foundation in electrical power systems, renewable energy, automation, and smart grids to address real-world challenges.",
    undergraduatePrograms: ["B.Tech in Electrical and Electronics Engineering"],
    postgraduatePrograms: ["M.Tech in Power Electronics and Drives"],
    phdPrograms: ["PhD in Electrical and Electronics Engineering"]
  },
  {
    school: "School of Mechanical Engineering",
    name: "Mechanical Engineering",
    description: "Emphasizes design, manufacturing, automation, and robotics, equipping students with skills for the evolving engineering landscape. The department also focuses on thermal engineering, fluid mechanics, and sustainable energy systems.",
    undergraduatePrograms: ["B.Tech in Mechanical Engineering", "B.Tech in Robotics and Automation"],
    postgraduatePrograms: ["M.Tech in Machine Design"],
    phdPrograms: ["PhD in Mechanical Engineering"]
  },
  {
    school: "School of Chemical Engineering",
    name: "Food Technology",
    description: "Focuses on food processing, preservation techniques, and quality control to ensure sustainable and safe food production. The department also emphasizes nutritional science, packaging technology, and innovative food engineering solutions.",
    undergraduatePrograms: ["B.Tech in Food Technology"],
    postgraduatePrograms: ["M.Tech in Food Processing Technology"],
    phdPrograms: ["PhD in Food Technology"]
},
  
  {
    school: "School of Chemical Engineering",
    name: "Chemical Engineering",
    description: "Integrates principles of chemistry, physics, and engineering to innovate in materials, energy, and environmental technologies. The department also focuses on process optimization, industrial safety, and sustainable chemical production, preparing students for roles in research and industry.",
    undergraduatePrograms: ["B.Tech in Chemical Engineering", "B.Tech in Petroleum Engineering"],
    postgraduatePrograms: [],
    phdPrograms: ["PhD in Chemical Engineering"]
  },
  {
    school: "School of Biotechnology",
    name: "Biotechnology",
    description: "Advances in life sciences, genetic engineering, and bioinformatics to address healthcare, agriculture, and environmental challenges.",
    undergraduatePrograms: ["B.Tech in Biotechnology", "B.Tech in Bioinformatics"],
    postgraduatePrograms: ["M.Tech in Biotechnology"],
    phdPrograms: ["PhD in Biotechnology"]
  },
  {
    school: "School of Management Studies",
    name: "Management Studies",
    description: "Provides in-depth training in business administration, entrepreneurship, marketing, and finance for global leadership roles.",
    undergraduatePrograms: ["BBA", "BBA (Hons)",],
    postgraduatePrograms: ["MBA"],
    phdPrograms: ["PhD in Business Administration"]
  },
  {
    school: "School of Pharmacy",
    name: "Pharmacy",
    description: "Equips students with pharmaceutical knowledge, drug research, and healthcare innovations for industry and clinical applications.",
    undergraduatePrograms: ["B.Pharm"],
    postgraduatePrograms: ["M.Pharm in Pharmaceutics", "Doctor of Pharmacy"],
    phdPrograms: ["PhD in Pharmacy"]
  },
  {
    school: "School of Agricultural and Horticultural Sciences",
    name: "Agricultural Engineering",
    description: "Blends engineering principles with modern agricultural techniques to enhance productivity and sustainability in farming.The department also focuses on precision agriculture.",
    undergraduatePrograms: ["B.Tech in Agricultural Engineering"],
    postgraduatePrograms: ["M.Tech in Farm Machinery"],
    phdPrograms: ["PhD in Agricultural Engineering"]
  },
  {
    school: "School of Computer Applications",
    name: "Information Technology",
    description: "Provides expertise in programming, software engineering, IT management, and emerging technologies for industry readiness.",
    undergraduatePrograms: ["BCA", "B.Tech in Information Technology"],
    postgraduatePrograms: ["MCA"],
    phdPrograms: ["PhD in Computer Applications"]
  },
  {
    school: "School of Law",
    name: "Law",
    description: "Offers comprehensive legal education and research opportunities to develop skilled professionals in various law domains.",
    undergraduatePrograms: ["BA.LLB (Hons.)", "BBA.LLB (Hons.)"],
    postgraduatePrograms: [],
    phdPrograms: ["PhD in Law"]
  },
  
  {
    school: "School of Textile Technology",
    name: "Textile Technology",
    description: "Focuses on textile manufacturing, material innovations, and sustainable textile production for industry advancement.",
    undergraduatePrograms: ["B.Tech in Textile Technology", "B.Tech in Technical Textiles"],
    postgraduatePrograms: [],
    phdPrograms: ["PhD in Textile Technology"]
  },
  {
    school: "School of Civil Engineering",
    name: "Civil Engineering",
    description: "Focuses on structural design, urban planning, sustainable infrastructure, and smart city development to build the future.",
    undergraduatePrograms: ["B.Tech in Civil Engineering"],
    postgraduatePrograms: [],
    phdPrograms: ["PhD in Civil Engineering"]
  },
  {
    school: "School of Computing",
    name: "Advanced  Computer Science Engineering",
    description: "Focuses on AI, machine learning, data science.",
    undergraduatePrograms: [
        "B.Tech in Artificial Intelligence and Machine Learning",
        "B.Tech in Cyber Security",
        "B.Tech in Computer Science and Business Systems",
        "B.Tech in Data Sciences",
        "B.Tech in Internet of Things"
    ],
    postgraduatePrograms: ["M.Sc(data science)"," M.Tech by Research"],
    phdPrograms: ["PhD in Advanced Computer Science and Engineering"]
},
{
  school: "School of Applied Sciences and Humanities",
  name: "Social sciences and Humanities",
  description: "Provides in-depth knowledge of human behavior, mental processes, and psychological research, preparing students for careers in counseling, clinical psychology, and research.",
  undergraduatePrograms: [
      "B.Sc in Psychology"
  ],
  postgraduatePrograms: [
      "M.Sc in Psychology (B.Sc Psychology Background)",
      "M.Sc in Psychology (Non-B.Sc Psychology Background)"
  ],
  phdPrograms: [
      "Ph.D in Psychology"
  ],
  additionalPrograms: [
      "Civil Services Program - Coaching in Competitive Exams"
  ]
},

{
  school: "School of Agricultural and Horticultural Sciences",
  name: "Agricultural and Horticultural Sciences",
  description: "Focuses on modern agricultural practices, sustainable farming, and advanced horticultural techniques to enhance productivity and environmental sustainability.",
  undergraduatePrograms: [
      "B.Sc (Hons.) Agriculture"
  ],
  postgraduatePrograms: [],
  phdPrograms: [
      "Ph.D. in Agronomy",
      "Ph.D. in Genetics and Plant Breeding",
      "Ph.D. in Soil Science",
      "Ph.D. in Plant Pathology",
      "Ph.D. in Horticulture"
  ]
},
{
  school: "School of Advanced Sciences and Languages",
  name: "English and Foreign Languages",
  description: "Enhances linguistic proficiency, critical thinking, and cultural awareness.",
  undergraduatePrograms: [
  ],
  postgraduatePrograms: [
      "M.A. in English"
  ],
  phdPrograms: [
      "Ph.D. in English Studies"
  ]
},

  {
    school: "School of Biomedical Engineering",
    name: "Biomedical Engineering",
    description: "Integrates engineering principles with medical sciences to develop healthcare solutions, medical devices, and innovative treatment technologies.",
    undergraduatePrograms: ["B.Tech in Biomedical Engineering"],
    postgraduatePrograms: [],
    phdPrograms: []
},



  


];

const Departments = ({ selectedDepartment }) => {
  return (
    <div 
  className="departments-container" 
  style={{ textAlign: "center", padding: "20px" }}
>
  <h1 
    className="title" 
    style={{ fontSize: "2rem", color: "#0044cc", marginBottom: "10px" }}
  >
    Academic Departments
  </h1>
  <p 
    className="subtitle" 
    style={{ fontSize: "1.1rem", color: "#555", marginBottom: "20px" }}
  >
    Explore our diverse range of academic departments and programs.
  </p>

  <div 
    className="department-grid" 
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "20px",
      padding: "20px",
      justifyContent: "center",
      alignItems: "stretch"
    }}
  >
    {departmentData.map((dept, index) => (
      <DepartmentCard key={index} dept={dept} highlight={dept.name === selectedDepartment} />
    ))}
  </div>
</div>

  );
};

export default Departments;