import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import {PersonFill } from 'react-bootstrap-icons'
import Logout from './auth/Logout';
import PropTypes from 'prop-types';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
    email: '',
    password: '',
    msg: null,
    activeTab: '1',
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated, user } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'REGISTER_FAIL' || 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, password } = this.state;
    if (name){
      // Create user object
      const newUser = {
        name,
        email,
        password
      };
      // Attempt to register
      this.props.register(newUser);
    } else {
      const user = {
        email,
        password
      };
      // Attempt to login
      this.props.login(user);
    }
  };

  tabToggle = tab => {
    if(this.state.activeTab !== tab) this.setState({activeTab: tab});
  }

  render() {
    const {activeTab} = this.state;
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Logout />
        ) : (
          <button onClick={this.toggle} className="sign-btn">
            <PersonFill />
          </button>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={`${activeTab === '1' ? 'active': null}`}
                  onClick={() => { this.tabToggle('1'); }}
                >
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={`${activeTab === '2' ? 'active': null}`}
                  onClick={() => { this.tabToggle('2'); }}
                >
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          </ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label for='name'>Name</Label>
                      <Input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name'
                        className='mb-3'
                        onChange={this.onChange}
                      />

                      <Label for='email'>Email</Label>
                      <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        className='mb-3'
                        onChange={this.onChange}
                      />

                      <Label for='password'>Password</Label>
                      <Input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        className='mb-3'
                        onChange={this.onChange}
                      />
                      <Button color='dark' style={{ marginTop: '2rem' }} block>
                        Register
                      </Button>
                    </FormGroup>
                  </Form>
                </TabPane>
                <TabPane tabId="2">
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label for='email'>Email</Label>
                      <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        className='mb-3'
                        onChange={this.onChange}
                      />

                      <Label for='password'>Password</Label>
                      <Input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        className='mb-3'
                        onChange={this.onChange}
                      />
                      <Button color='dark' style={{ marginTop: '2rem' }} block>
                        Login
                      </Button>
                    </FormGroup>
                  </Form>
                </TabPane>
              </TabContent>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, register, clearErrors }
)(ItemModal);
