import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Player from "../components/Player";
import {Aside} from "../components/Aside";

function Landing() {
  return (
    <Container>
      <Row>
        <Col className="content" lg="10" md="12" sm="12" >
          <Player />
        </Col>
        <Col className="aside" lg="2" md="12" sm="12" >
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
