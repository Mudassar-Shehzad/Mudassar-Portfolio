import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import Resume from "./Resume";
import pdf from "../../Assets/MudassarCV.pdf";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section bg-dark text-white">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="justify-content-left">
          <Col md={8} className="d-flex justify-content-left">
            <Resume /> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
