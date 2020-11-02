import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import AuthModal from "./AuthModal";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
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
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);
