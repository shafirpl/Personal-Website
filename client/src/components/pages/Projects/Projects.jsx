import "./Projects.css";
import { Tab, Row, Col, Container, Nav } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="Projects">
      <Container>
        <h1>Some Interesting Projects that I have built</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Companion App</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Foundry App</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Progressive Web App Template
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Smart Cart</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fifth">Rental Finder</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="description">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div>
                    <h2>Personal Project</h2>
                    <ul className="list">
                      <li>
                        Developed a mobile app to efficiently complete daily tasks such as creating, editing and deleting notes as well as car maintenance records,
                        convert between measurement units, and calculate required cups of water for my rice cooker. GitHub URL:{" "}
                        <strong>
                          <i>
                            <a
                              href="https://github.com/shafirpl/CompanionApp"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://github.com/shafirpl/CompanionApp{" "}
                            </a>
                          </i>
                        </strong>
                      </li>
                      <li>
                        Used <strong>Java</strong> and <strong> Android Studio</strong> to develop the Android version as well as <strong> Xcode </strong> and <strong> Swift</strong> to develop the iOS version
                      </li>
                      <li>
                        The app allows me to create, edit and delete new notes/todo lists as well
                        as car maintenance records, and convert between
                        units that I mostly used in daily life such as <strong>USD to
                          CAD</strong>, <strong> Celcius to Fahrenheit</strong>,  <strong>
                          KG to LBS </strong> and <strong>Miles to Km </strong>. It uses Bank of
                        Canada's API to get the real-time USD to CAD rates
                      </li>
                      <li>
                        The Miles to Km functionality was added as my car is
                        American where they use miles. However I use gas buddy
                        to keep track of my car's fuel economy and I prefer the
                        liter/100km unit, and so the gas buddy app requires
                        odometer reading in kms. So whenever i use the gas buddy
                        app, i have to open up my chrome browser and input it
                        and wait, which is just too much work for such a simple
                        conversion. That is why I added that functionality so
                        that instead of going through all the hassle, I can
                        quickly convert between units.
                      </li>
                      <li>
                        Similarly I use recipes that my mom sent me (with videos
                        of how to prepare the food) and she uses kgs. However
                        the meat shop I buy meat from uses lbs. So that is why I
                        decided to add that conversion functionality to quickly
                        convert between units.
                      </li>

                      <li>
                        Implemented a desktop app using <strong> Electron </strong>, <strong>HTML</strong> and <strong>CSS</strong> which allows an user interface to
                        monitor CPU and memory status of my computers
                        (such as cpu usage, cpu free, memory usage, memory free, cpu model, frequency etc) locally via the desktop app or
                        remotely via the mobile app
                      </li>
                      <li>
                        Utilized <strong>Node.js</strong> ,<strong> Express </strong>, and <strong>MongoDB</strong> to build a
                        backend to sync the notes and ip addresses (the mobile apps use the ip address to establish a connection with
                        the selected computer and gathers monitoring data to show them)
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>
                    <h2>Personal Project</h2>
                    <ul className="list">
                      <li>
                        Created a mobile app with a team using <strong>React Native</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong> for the
                        Foundry Clinic to improve the patient referral process and medical staff communication system;
                        Demo:{" "}
                        <strong>
                          <i>
                            <a
                              href="https://youtu.be/Of9pm8fjpcU"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://youtu.be/Of9pm8fjpcU{" "}
                            </a>
                          </i>
                        </strong>
                      </li>
                      <li>
                        Increased daily productivity for the medical staff by <strong>30%</strong>, as well as patient retention by <strong>50%</strong>
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div>
                    <h2>Personal Project</h2>
                    <ul className="list">
                      <li>
                        Created a progressive web app template using <strong>MongoDB</strong> , <strong> Express </strong>, <strong> React </strong>, <strong> Bootstrap </strong> and <strong> Node.js </strong>
                        that allows users to rapidly develop and deploy progressive web apps
                      </li>
                      <li>
                        Developed this website in just 2 days uitilizing this template
                      </li>
                      <li>
                        Implemented Progressive Web App functionalities which
                        allow the website to be installed on mobile devices as
                        well as provide a native app-like user experience
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div>
                    <h2>School Project</h2>
                    <ul className="list">
                      <li>
                        Collaboratively developed a prototype smart cart
                        for CPEN 391 (Engineering Design) coursework. Video demo
                        of the project{" "}
                        <strong>
                          <i>
                            <a
                              href="https://drive.google.com/open?id=1C6XLuSjBohzFgSZWyzH5ccS4i4eL2Ddz"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              URL
                            </a>
                          </i>
                        </strong>
                      </li>
                      <li>
                        The prototype allows shoppers to scan an item using
                        portable handheld scanner or manually enter the item
                        number, get price and checkout the item
                      </li>
                      <li>
                        The user has to enter his/her membership card and when
                        s/he checks out, the amount is deducted from the
                        membership card and an SMS is sent notifying the user
                        about the recent transaction. The user is also notified
                        if s/he adds balance to his/her card

                      </li>
                      <li>
                        Created the initial visual library functions using
                        <strong> Verilog </strong> and <strong> C</strong> that were used to create the visual
                        interface
                      </li>
                      <li>
                        Implemented all the back-end functionalites using {""}
                        <strong>Node.js</strong>, <strong> Express </strong> and <strong> MongoDB</strong> that allows the prototype
                        to identify the user using a membership card, fetch item
                        prices, edit user dollar amount when the user initiates
                        a transaction or adds balance, as well as sends SMS (by
                        integrating <strong>Twilio</strong>) to the user's phone when a
                        transaction takes place
                      </li>
                      <li>
                        Also added functionalities to add and edit users, as
                        well as add, edit and delete items and their prices
                      </li>
                      <li>
                        Deployed the Node.js app on a Digital Ocean server
                        using <strong>Linux </strong>and <strong>Git</strong>
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div>
                    <h2>School Project</h2>
                    <ul className="list">
                      <li>
                        Developed a cross-platform mobile app collaboratively for CPEN 321 (Software Engineering) course utilizing the <strong>React Native</strong> framework, <strong>MongoDB</strong>, <strong>Node.js </strong> and <strong>Express</strong>
                      </li>
                      <li>
                        Designed the app specifically for students who are looking for a roommate to share their dwelling units with others.
                        It also allows landlords who are looking for potential tenants to post ads.
                      </li>

                      <li>
                        Implemented all the backend functionalities solely that allow
                        users to users to create and edit accounts; create, edit
                        and delete ads; send email to other users and search for
                        specific ads using parameters such as zip code, smoking
                        preferences, cooking preferences and sleeping
                        preferences (such as an early morning or late night person)
                      </li>
                      <li>Deployed the Node.js app on an <strong>AWS </strong>server and implemented unit testing collaboratively using <strong>Mocha </strong>and <strong>Chai</strong></li>
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

export default Projects;
