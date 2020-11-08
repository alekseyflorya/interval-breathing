import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";
import AuthModal from "./AuthModal";

export default function AppNavbar() {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col sm={{ size: 3, offset: 9 }} className="header-right">
            <AuthModal />
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="header-left">
            <Link to="/" className="header-title" >Interval breathing</Link>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
