import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          i miei recenti <strong className="purple">Progetti </strong>
        </h1>
        <p style={{ color: "white" }}>
          Un po' dei miei progetti più recenti
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="audio service & live music"
              description="da oramai un anno collaboro con una società teatrale che mi ha permesso di accresscere la mia passione verso la musica e il lato più sconociuto di questa, e grazie a questo sono riuscito a far partire dei progetti come portare la musica nelle scuole e aiutare piccole band per farle crescere"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="il giornale di Ugo e Radio Ugo"
              description="Radio Ugo è una web radio nata nel 2021 all'interno dell'ITI Severi di Padova, che trasmette alcune volte all'anno all'interno dell'istituto"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
