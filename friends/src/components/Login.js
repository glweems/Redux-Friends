import { Button, Form } from 'reactstrap';

import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   error: props.error,
      credentials: {
        username: '',
        password: ''
      }
    };
  }
  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/protected');
    });
  };

  render() {
    return (
      <div className="Login">
        {/* {this.state.error && <h2>FAILURE logging in</h2>} */}
        <Form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
            placeholder="Name"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
            placeholder="Password"
          />
          <Button color="primary">Log In</Button>
        </Form>
      </div>
    );
  }
}

const mstp = state => {
  return {
    error: state.error
  };
};
export default connect(
  mstp,
  { login }
)(Login);
