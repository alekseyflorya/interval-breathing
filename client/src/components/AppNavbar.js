import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";
import AuthModal from "./AuthModal";

export default function AppNavbar() {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col sm="10" className="header-left">
            <Link to="/" className="header-title" >Interval breathing</Link>
          </Col>
          <Col sm="2" className="header-right">
            <AuthModal />
          </Col>
        </Row>
      </Container>
    </header>
  )
}
