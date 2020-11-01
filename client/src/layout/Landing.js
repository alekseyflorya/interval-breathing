import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Player} from "../components/Player";
import {Aside} from "../components/Aside";

class Landing extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {

  }

  render() {
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
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps
)(Landing);
