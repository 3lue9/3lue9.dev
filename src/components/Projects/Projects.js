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
              imgPath={chatify}
              isBlog={false}
              title="TakeBY"
              description="TakeBy è una piattaforma online che crea una rete di negozi, consentendo agli utenti di prenotare prodotti e servizi da diverse attività, come farmacie, supermercati, negozi di abbigliamento, saloni di bellezza e altro ancora, attraverso un'unica app."
              ghLink="https://github.com/TakeBy-it"
              demoLink="https://www.takeby.it/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Regia teatrale"
              description="grazie a delle connessioni, me è stato offerto un posto in una compagnia teatrale, che mi ha permesso di imparare e espandere la mia passione per la musica e l'audio live"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
