import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Navigationbar from "./components/layout/NavigationBar/Navigationbar.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Landing from "./components/pages/Landing/Landing.jsx";
import AboutMe from "./components/pages/AboutMe/AboutMe.jsx";
import WorkExperience from "./components/pages/WorkExperience/WorkExperience.jsx";
import Projects from "./components/pages/Projects/Projects.jsx";
import Education from "./components/pages/Education/Education.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";

export default function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
