import React from "react";
import { Link } from "react-router-dom";
import {Col, Container, Row} from "reactstrap";

function BreathingRhythm () {
  return (
    <Container>
      <Row>
        <Col sm="10">
          <h2>Breathing Rhythm</h2>
          <h3>In this block has been options of Breathing Rhythm</h3>
        </Col>
        <Col sm="2">
          <Link
            to="/"
            className="btn btn-large"
          >
            Home
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default BreathingRhythm
