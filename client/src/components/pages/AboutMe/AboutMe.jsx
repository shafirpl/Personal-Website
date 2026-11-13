import { Tabs, Tab } from "react-bootstrap";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="About-me">
      <div className="container">
        <h1>Get to know me</h1>
        <div className="tabs">
          <Tabs defaultActiveKey="shortBio" id="uncontrolled-tab-example">
            <Tab eventKey="shortBio" title="Short Bio" className="title">
              <div className="tab-description">
                <p>
                  I am a final-year <strong>Computer Engineering</strong> student at <strong>UBC (The
                    University of British Columbia)</strong>, graduating in <strong>Jan 2023</strong>,{" "}
                  with a focus on <strong>Software Engineering specialization</strong>. I have
                  taken courses on Software Engineering, Deep Learning, Software Testing, Operating System,
                  Databases, Data Structure and Algorithms, Mathematical Proof, Basics of Computer Architecture,
                  Linear Algebra as well as Calculus. Likewise, I also have <strong>more than 2 years of internship
                    experience</strong> working with companies ranging from startups to <strong>Fortune 500</strong> such as{" "}
                  <strong>HP</strong>, <strong>SAP</strong> and <strong>Microsoft</strong>.
                </p>
                <p>
                  I am interested in full-stack web development, app development
                  (both iOS and Android) and Machine learning. In my free time, I
                  take Udemy courses and build projects to enhance my skills in
                  these areas.
                </p>
                <p>
                  Apart from taking Udemy courses, my hobbies include
                  playing video games. My love for video games was one of the
                  motivating factors for undertaking my major. I also love
                  keeping myself updated with the latest technologies, as well as
                  watching YouTube videos on tech, and Linus Tech Tips is one of
                  my favourite channels. Most often or not, my friends seek
                  my advice before they purchase any tech product or build
                  up their gaming pc.
                </p>
                <p>
                  My hobbies also include trying out different food and cooking. My mom and my only sister
                  are very good cooks, and they send me video recipes of cooking various delicious Indian/Bangladeshi dishes
                  that I try (with some degree of success I would add) from time to time.
                </p>
              </div>
            </Tab>
            <Tab eventKey="skills" title="Skills">
              <div className="tab-description">
                <p>
                  I feel that I have extensive experience from my internship, school
                  and personal projects in <strong>Bootstrap</strong>, <strong>JavaScript</strong>,{" "}
                  <strong>Node.js</strong>, <strong>Java</strong>, <strong>Express</strong> and
                  <strong> MongoDB</strong>.
                </p>
                <p>
                  I also have extensive experience in deploying Node apps on
                  servers such as Digital Ocean droplets using{" "}
                  <strong>Linux Commands</strong> as well as{" "}
                  <strong>Git </strong> for continuous integration and
                  collaboration.
                </p>
                <p>
                  I have significant experience in <strong>C</strong> and <strong>C++</strong> mostly from coursework
                  and internships.
                </p>
                <p>
                  I have some experience in <strong>Python</strong> as it is my go-to language for interviews, and I am learning
                  Machine Learning in my free time from Udemy. Furthermore, I also have some experience in <strong>SQL</strong>, mostly from my
                  coursework.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
