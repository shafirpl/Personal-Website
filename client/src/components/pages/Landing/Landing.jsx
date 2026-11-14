import { Link } from "react-router";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <div className="land-animation">
              <h1 className="x-large">Hi I am Shafi</h1>
              <p className="lead">
                Software Engineer @ Microsoft | Building Scalable and Resilient IAM Protection, Cloud Security, and Full-Stack Apps
              </p>
              <div className="buttons">
                <Button variant="primary" className="button-margin land-button" as={Link} to="/work-experience">
                  Work Experience
                </Button>
                <Button variant="info" className="land-button" as={Link} to="/projects">
                  Interesting Projects
                </Button>
              </div>
              <div className="social-links">
                <a href="https://github.com/shafirpl/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} className="social-link" />
                </a>
                <a href="https://www.linkedin.com/in/shafi-hoque-a7238163/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} className="social-link" />
                </a>
                <Link to="/contact" aria-label="Contact">
                  <FontAwesomeIcon icon={faEnvelope} className="social-link" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
