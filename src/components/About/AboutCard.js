import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Ciao a tutti, sono <span className="purple"> Massimiliano Bruchi </span>
            vengo da <span className="purple"> Padova, Italia.</span>
            <br />
            sto attualmente studiano informatica @ ITI F. Severi 
            <br />
            ho passato con successo la certificazione Cabrige  B2 con grado C per la lingua Inglese
            <br />
            <br />
            Oltre al programmare collaboro con scuole e associazioni nel territorio
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
