import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Player from "../components/Player";
import {Aside} from "../components/Aside";

function Landing() {
  return (
    <Container>
      <Row>
        <Col className="content" sm="10">
          <Player />
        </Col>
        <Col className="aside" sm="2">
          <Aside buttons />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps
)(Landing);
