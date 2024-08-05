import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import snakerushImage from '../../Assets/Projects/snakerush.png.png';
import tictactoeImage from '../../Assets/Projects/tictactoe.png';

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakerushImage}
              isBlog={false}
              title="SnakeRush"
              description="A classic Snake game built with HTML, CSS, and JavaScript. Navigate the snake to collect food and avoid collisions with the walls and itself. The game features smooth controls and a score tracking system."
              ghLink="https://github.com/Mudassar-Shehzad/Snake-Game"
              demoLink="https://snake-game-git-main-mudassar-shehzads-projects.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoeImage}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="An interactive Tic-Tac-Toe game created with HTML, CSS, and JavaScript. Players can enjoy a classic game experience with a simple user interface and responsive design. The game includes features for detecting winning conditions and handling game resets."
              ghLink="https://github.com/Mudassar-Shehzad/Tic-Tac-Toe"
              demoLink="https://tic-tac-toe-three-weld.vercel.app"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
