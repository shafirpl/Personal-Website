import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../../../config.js";
import "./Navigationbar.css";

const Navigationbar = () => {
  const [expanded, setExpanded] = useState(false);
  // Collapse the mobile menu whenever a link is chosen.
  const close = () => setExpanded(false);

  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="dark" variant="dark" expand="md" expanded={expanded} onToggle={setExpanded}>
      <Navbar.Brand as={Link} to="/" onClick={close}>
        <FontAwesomeIcon icon={faLaptopCode} className="brand-icon" />
        Shafi
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar-nav" />
      <Navbar.Collapse id="main-navbar-nav">
        {/* NavLink adds the "active" class to the link for the current route. */}
        <Nav className="me-auto link-items">
          <Nav.Link as={NavLink} to="/about-me" onClick={close}>About Me</Nav.Link>
          <Nav.Link as={NavLink} to="/work-experience" onClick={close}>Work Experience</Nav.Link>
          <Nav.Link as={NavLink} to="/projects" onClick={close}>Projects</Nav.Link>
          <Nav.Link as={NavLink} to="/education" onClick={close}>Education</Nav.Link>
          <Nav.Link href="https://github.com/shafirpl/" target="_blank" rel="noopener noreferrer" onClick={close}>
            GitHub
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto link-items">
          <Nav.Link href={`${API_BASE_URL}/api/resume`}>Resume</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/shafi-hoque-a7238163/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" onClick={close}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
