import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pro from '../../Assets/Projects/pro.jpg'
import currency from '../../Assets/Projects/currency.png'
import todo from '../../Assets/Projects/todo.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="Currency-Converter">
            <ProjectCard
              imgPath={pro}
              isBlog={false}
              title="Alumni-portal"
              description="developed an Alumni Portal for a college, aimed at enhancing alumni engagement, facilitating professional networking, and encouraging donations. The platform includes features for showcasing alumni success stories, listing events, and providing a space for startups to seek funding. With a focus on user-friendly design and seamless navigation, the portal fosters strong connections between alumni and the institution."
              ghLink="https://github.com/viper-raghav/grad-hack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency-Converter"
              description=" developed a Currency Converter application using React.js and Tailwind CSS. The app allows users to convert between different currencies by fetching real-time exchange rates from an API. It also features a convenient currency swap function for easy switching between currencies, offering a smooth and intuitive user experience."
              ghLink="https://github.com/viper-raghav/currency-converter-react"
            />
          </Col>
/
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo-List"
              description="created a Todo List application using React.js and Tailwind CSS, designed to help users manage their tasks efficiently. The application allows users to add, modify, mark tasks as complete, and delete items, with data stored locally for easy access. Its clean and user-friendly interface enhances the overall experience, making task management simple and enjoyable."
              ghLink="https://github.com/viper-raghav/Todo-List"          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
