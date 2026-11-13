import { Row, Col, Tab, Nav, Container } from "react-bootstrap";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <div className="WorkExperience">
      <Container>
        <h1>Companies I have worked with</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Microsoft</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">SAP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Teradici, an HP Company</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Appnovation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Progress Impex Ltd</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="description">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="role">
                    <h2>Service Engineer Intern</h2>
                    <p>May, 2022 - Jul, 2022</p>
                    <p>Redmond, WA</p>
                    <ul className="list">
                      <li>
                        Engineered a web app, which enabled the stakeholders to manage application versions on Microsoft Virtual Desktops,
                        utilizing <strong>ASP.NET</strong>, <strong>C#</strong>, <strong>React</strong>,{" "}
                        <strong>HTML</strong>, <strong>CSS</strong>, <strong>TypeScript</strong>,{" "}
                        <strong>JavaScript</strong>, <strong>Azure Cosmos DB</strong>,{" "}
                        <strong>Coherence UI</strong> and <strong>Fluent UI</strong>;
                        improving user experience and productivity by <strong>83%</strong>
                      </li>
                      <li>
                        Facilitated co-workers to split the existing code base, and documented the relevant process, enhancing the productivity of relevant dev teams
                      </li>
                      <li>
                        Increased usability of the self-service portal web app for Microsoft
                        Virtual Desktops by researching, discovering and documenting
                        <strong>13</strong> accessibility issues; which helped the developers to
                        apply appropriate code change quickly
                      </li>
                      <li>
                        Received critical acclaim and <strong>100%</strong> satisfaction from the leadership team for
                        the final presentation demonstrating progress made during the internship
                      </li>
                    </ul>
                  </div>
                  <div className="role">
                    <h2>Service Engineer Intern</h2>
                    <p>May, 2022 - Jul, 2022</p>
                    <p>Redmond, WA</p>
                    <ul className="list">
                      <li>
                        Engineered a web app, which enabled the stakeholders to manage application versions on Microsoft Virtual Desktops,
                        utilizing <strong>ASP.NET</strong>, <strong>C#</strong>, <strong>React</strong>,{" "}
                        <strong>HTML</strong>, <strong>CSS</strong>, <strong>TypeScript</strong>,{" "}
                        <strong>JavaScript</strong>, <strong>Azure Cosmos DB</strong>,{" "}
                        <strong>Coherence UI</strong> and <strong>Fluent UI</strong>;
                        improving user experience and productivity by <strong>83%</strong>
                      </li>
                      <li>
                        Facilitated co-workers to split the existing code base, and documented the relevant process, enhancing the productivity of relevant dev teams
                      </li>
                      <li>
                        Increased usability of the self-service portal web app for Microsoft
                        Virtual Desktops by researching, discovering and documenting
                        <strong>13</strong> accessibility issues; which helped the developers to
                        apply appropriate code change quickly
                      </li>
                      <li>
                        Received critical acclaim and <strong>100%</strong> satisfaction from the leadership team for
                        the final presentation demonstrating progress made during the internship
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="role">
                    <h2>Software Engineer Intern</h2>
                    <p>Sep, 2021 - Apr, 2022</p>
                    <p>Vancouver, BC</p>
                    <ul className="list">
                      <li>
                        Automated the customer support ticket creation process by using {" "}
                        <strong>SAP's internal API</strong>, <strong>Java Spring</strong>, <strong>Vue.js</strong>,
                        {" "}<strong>HTML</strong>, <strong>CSS</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>,
                        and <strong>SQL</strong>; increasing productivity and reducing cost up to <strong>50%</strong>
                      </li>
                      <li>
                        Increased test coverage of the partner application form to {" "}
                        <strong>86%</strong> using <strong>Java</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>,{" "}
                        <strong>JUnit</strong>, <strong>Jest</strong>, and <strong>Enzyme</strong>; ensuring high quality of the product
                      </li>
                      <li>
                        Improved user experience by integrating
                        functionalities in <strong>Java Spring</strong> and <strong>SQL</strong>; enabling users to quickly view application summary
                      </li>
                      <li>
                        Created a prototype chatbot app by utilizing <strong>SAP Conversational AI</strong> (an internal Natural Language Processing framework)
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="role">
                    <h2>Software Engineer Intern</h2>
                    <p>May, 2021 - Aug, 2021</p>
                    <p>Burnaby, BC</p>
                    <ul className="list">
                      <li>
                        Developed a desktop app to initiate remote sessions using {" "}
                        <strong>C++</strong>, <strong>React</strong>, <strong>Electron</strong>,{" "}
                        <strong>JavaScript</strong>, <strong>TypeScript</strong>, and <strong>Amazon Web Services (AWS) Unix/Linux</strong>{" "}
                        system in an <strong>agile</strong> environment; satisfying <strong>80%</strong> of customers’ requirements
                      </li>
                      <li>
                        Designed unit and integration tests using{" "}
                        <strong>Python</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>,{" "}
                        <strong>Jest</strong> and <strong>Enzyme</strong>; improving code quality by <strong></strong>50%,{" "}
                        and code coverage by <strong>85%</strong>
                      </li>
                      <li>
                        Articulated the team’s technical challenges and solutions regularly to the company, exceeding the company’s high standards of intercommunication
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="role">
                    <h2>Software Engineer Intern</h2>
                    <p>Jan, 2019 - Aug, 2019</p>
                    <p>Vancouver, BC</p>
                    <ul className="list">
                      <li>
                        Developed a demo mobile app using <strong>Java</strong>, <strong>Android Studio</strong>,{" "}
                        <strong>Xcode</strong> and <strong>Swift</strong> for a{" "}
                        $7M USD contract proposal to serve Hong Kong Airport’s 72M annual travellers
                      </li>
                      <li>
                        Collaborated with experienced cross-disciplinary dev teams to create the corporate{" "}
                        website using <strong>HTML</strong>, <strong>CSS</strong> and <strong>Bootstrap</strong>; reducing load time by <strong></strong>60%.{" "}
                        Website URL: <strong><i><a href="https://www.appnovation.com/" target="_blank" rel="noopener noreferrer">https://www.appnovation.com/ </a></i></strong>
                      </li>
                      <li>
                        Implemented backend <strong>REST APIs</strong> in <strong>Node.js</strong> to enable real-time bookings for hiking instructors’ mobile app
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div className="role">
                    <h2>Software Engineer Intern</h2>
                    <p>Jun, 2018 - Aug, 2018</p>
                    <p>Dhaka, Bangladesh</p>
                    <ul className="list">
                      <li>
                        Developed and launched a web app for the company's car dealership network{" "}
                        using <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>Bootstrap</strong>,{" "}
                        <strong>HTML</strong> and <strong>CSS</strong>; before the company’s Q3 deadline,{" "}
                        resulting in <strong>50%</strong> more sales;{" "}
                        Website URL: <strong><i><a href="https://www.progressmotorsltd.com/" target="_blank" rel="noopener noreferrer">https://www.progressmotorsltd.com/ </a></i></strong>
                      </li>
                      <li>
                        Analyzed customer’s ambiguous problems to decipher and tailor the web app design, resulting in <strong>80%</strong> customer satisfaction
                      </li>
                      <li>
                        Implemented <strong>Redis </strong> Cache to decrease the load time of the website and
                        utilized <strong> Passport.js </strong> to implement an authentication system for the admin page
                      </li>
                      <li>
                        Utilized <strong>REST APIs</strong>, <strong>DigitalOcean</strong> server and{" "}
                        <strong>Cloudflare Content Delivery Network</strong> to scale the web app to serve{" "}
                        over <strong>10,000 requests per month</strong>, with each request taking{" "}
                        under <strong>2 seconds</strong> for optimal user experience
                      </li>
                      <li>
                        Developed a mobile app in <strong>Java</strong> and <strong>Android Studio</strong> for internal usage,{" "}
                        increasing employee productivity by <strong>50%</strong>
                      </li>
                      <li>
                        Executed tasks under minimal supervision and with little instruction and guidance
                      </li>
                      <li>
                        Went beyond call of duty to help the company negotiate a contract worth <strong>100,000 USD</strong> with a Swiss company
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default WorkExperience;
