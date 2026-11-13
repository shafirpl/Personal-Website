import Accordion from "react-bootstrap/Accordion";
import "./Education.css";

const courses = [
  {
    name: "CPEN 321: Software Engineering",
    overview:
      "The course taught us about SDLC (Software Development Life Cycle), software methodologies such as waterfall, agile etc, continuous integration using Git, UML diagrams, the REST api, software verification and validation, user requirements, design etc. The course required the students to work in a group of four to develop a mobile application with a backend that implements the REST Api.",
  },
  {
    name: "CPEN 400D: Deep Learning",
    overview:
      "This course focused on the implementation and applications of deep learning systems for tasks such as object recognition, speech recognition, language processing, and autonomous driving. Specific concepts include neural networks, deep neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs) as well as improvement and optimization techniques such as backpropagation, gradient descent, parameter tuning and regularization. This course involved extensive hands-on programming assignments.",
  },
  {
    name: "CPEN 422: Software Testing",
    overview:
      "The Course involved teaching Different levels of testing including unit, integration, system, performance and regression levels. Requirements flowdown. Problem tracking. Coverage criteria. Static methods. Tools support. Specialized techniques. Assessment of correctness, reliability, safety. The course primarily used Java. It enhanced my skills on jUnit testing, coverage, mutation testing, regression testing, symbolic execution, GUI testing and invariant inference. The course primarily used Java.",
  },
  {
    name: "CPEN 331: Operating System",
    overview:
      "The Course involved teaching introduction to operating systems, their design and their implementation. Process concurrency, synchronization, communication and scheduling. Device drivers, memory management, virtual memory, file systems, networking and security. The course required us to build up the OS161 operating system module by module, which enhanced our skills on computer architecture, operating system and firmware.",
  },
  {
    name: "CPSC 304: Introduction to Relational Databases",
    overview:
      "The Course involved teaching ER models, logical database design and normalization, formal relational query languages, SQL and other commercial languages,data warehouses, special topics. It enhanced my SQL skills",
  },
  {
    name: "CPSC 221: Basic Algorithms and Data Structures",
    overview:
      "The Course involved teaching Design and analysis of basic algorithms and data structures; algorithm analysis methods, searching and sorting algorithms, basic data structures, graphs and concurrency.",
  },
  {
    name: "CPSC 261: Basics of Computer Systems",
    overview:
      "Software architecture, operating systems, and I/O architectures. Relationships between application software, operating systems, and computing hardware; critical sections, deadlock avoidance, and performance; principles and operation of disks and networks. I learnt in depth about cache; x86 assembly language; multithreading; different file systems such as FAT 32, Linux file system such as ext2,3,4; pointers; basics of operating sytems such as microkernel as well as virtual memory.",
  },
];

const Education = () => {
  return (
    <div>
      <div className="Education">
        <h1>B.A.Sc in Computer Engineering: Expected Completion in Jan 2023</h1>
        <h1>The University of British Columbia</h1>
        <h1>Relevant Academic Courses</h1>
        <Accordion>
          {courses.map((course, index) => (
            <Accordion.Item eventKey={String(index)} key={course.name}>
              <Accordion.Header>
                <div className="title">
                  <h2 className="name">{course.name}</h2>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <h3>
                    <span className="label label-primary">Overview</span>
                  </h3>
                  <p className="description">{course.overview}</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Education;
