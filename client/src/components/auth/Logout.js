import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.props.logout}>
          Logout
        </button>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
