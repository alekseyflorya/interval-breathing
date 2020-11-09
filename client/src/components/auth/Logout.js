import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { BoxArrowRight } from 'react-bootstrap-icons'

function Logout({userName, logout}) {

  return (
    <>
      <span
        style={{
          fontSize: '1.5rem',
          color: '#fff',
          marginRight: '40px',
          verticalAlign: 'middle',
          position: 'absolute',
          right: '20px',
        }}
      >Hi, <strong>{userName}</strong></span>
      <button onClick={logout} className="sign-out-btn">
        <BoxArrowRight />
      </button>
    </>
  );
}

const mapStateToProps = state => ({
  userName: state.auth.user.name
});

export default connect(
  mapStateToProps,
  { logout }
)(Logout);
