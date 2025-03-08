import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import Header from "./components/Header";

import TopBar from "./components/TopBar";

import Departments from "./components/Departments";

import Banner from "./components/Banner";
import Containers from "./components/Containers";
import FormSuccess from "./components/FormSuccess"; // ✅ Import FormSuccess
import Footer from "./components/Footer";
import NewAdmissionForm from "./components/NewAdmissionForm";
import InternationDashboard from "./components/InternationDashboard";
import NationalDashboard from "./components/NationalDashboard";

function App() {

    return (

        <>

            <TopBar />

            <Header />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/departments" element={<FormSuccess />} />

                <Route path="/apply" element={<Banner />} />
                <Route path="/new-admission-form" element={<NewAdmissionForm />} />
                <Route path="/" element={<Containers />} />
                <Route path="/national-admissions" element={<NationalDashboard />} />
                <Route path="/international-dashboard" element={<InternationDashboard />} />
            </Routes>
            <Footer />
        </>

    );

}



export default App;